import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
	// Don't show the cart by default
	const [showCart, setShowCart] = useState(false);
	// Items in the user's cart local storage
	const [cartItems, setCartItems] = useState([]);
	// Total cost of items in user cart
	const [totalPrice, setTotalPrice] = useState(0);
	// The quantities of every item in user cart
	const [totalQuantities, setTotalQuantities] = useState(0);
	// The number on the "quantity" button
	const [qty, setQty] = useState(1);

	let foundProduct;
	let index;

	// Adding items to cart logic
	const onAdd = (product, quantity) => {
		setCartItems((prevCartItems) =>
			prevCartItems.sort((a, b) => {
				// Change this to whatever you want to sort by.
				return b.quantity - a.quantity;
			})
		);
		// Check if the user already has this item in their cart
		const checkProductInCart = cartItems.find(
			(item) => item._id === product._id
		);

		// Add the total cost of the item multiplied by its quantity to the subtotal
		setTotalPrice(
			(prevTotalPrice) => prevTotalPrice + product.price * quantity
		);

		// Add the quantity of the item to the total quantity state
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

		// If they already have the item in their cart, increase that specific item's quantity, then add to the subtotal.
		if (checkProductInCart) {
			// Update that item's quantity
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
			});

			setCartItems(updatedCartItems);
		} else {
			product.quantity = quantity;

			setCartItems([...cartItems, { ...product }]);
		}
		toast.success(`${qty} ${product.name} added to the cart.`);
	};

	// Removing items from cart logic
	const onRemove = (product) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);

		// Remove the cost of the removed items
		setTotalPrice(
			(prevTotalPrice) =>
				prevTotalPrice - foundProduct.price * foundProduct.quantity
		);

		// Deduct from the total quantity
		setTotalQuantities(
			(prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
		);

		setCartItems(newCartItems);
	};

	// Increase or decrease the amount of a single item in the cart
	const toggleCartItemQuantity = (id, value) => {
		foundProduct = cartItems.find((item) => item._id === id);
		index = cartItems.findIndex((product) => product._id === id);
		const newCartItems = cartItems.filter((item) => item._id !== id);

		if (value === "inc") {
			setCartItems([
				...newCartItems,
				{ ...foundProduct, quantity: foundProduct.quantity + 1 },
			]);
			setCartItems((prevCartItems) =>
				prevCartItems.sort((a, b) => {
					// Change this to whatever you want to sort by.
					return b.quantity - a.quantity;
				})
			);
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
		} else if (value === "dec") {
			if (foundProduct.quantity > 1) {
				setCartItems([
					...newCartItems,
					{ ...foundProduct, quantity: foundProduct.quantity - 1 },
				]);
				setCartItems((prevCartItems) =>
					prevCartItems.sort((a, b) => {
						// Change this to whatever you want to sort by.
						return b.quantity - a.quantity;
					})
				);
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
				setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
			}
		}
	};

	// Increase quantity
	const incQty = () => {
		// Grab previous "Qty" state, add 1 to it.
		setQty((prevQty) => prevQty + 1);
	};

	// Decrease quantity
	const decQty = () => {
		// Grab previous "Qty" state, if it's more than 1, reduce it by 1.
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	};

	return (
		<Context.Provider
			// An object of values we want to pass to our entire application
			value={{
				showCart,
				setShowCart,
				cartItems,
				setCartItems,
				totalPrice,
				setTotalPrice,
				totalQuantities,
				setTotalQuantities,
				qty,
				incQty,
				decQty,
				onAdd,
				toggleCartItemQuantity,
				onRemove,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);

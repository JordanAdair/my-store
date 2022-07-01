![🛒_MyStore](https://user-images.githubusercontent.com/43575081/176933310-6433ca1e-a6b8-4180-b9bd-d97b414d3196.png)

➡ **Try the [LIVE DEMO](https://my-store-phi.vercel.app/)** ⬅

# Table of Contents
1. [Introduction](#introduction)
2. [Home](#home)
3. [Product Information](#product)
4. [Cart](#cart)
5. [Stripe Checkout](#stripe)
6. [Sanity](#sanity)
7. [Environment Variables](#env)

## Introduction <a name="introduction"/>
**MyStore** is a modern full stack e-commerce web application designed using **React**, **Next.js**, **Sanity**, and **Stripe**.  

This project uses **React** best practices, including hooks, refs, and proper folder structure. It uses **React Context API** to manage state, and **Next.js** for file-based routing, server-side rendering, and static generation. **Stripe** is used for secure payments during the checkout process. 

## Home <a name="home"/>

The Home page consists of a hero banner, some best-selling products, and a footer section: 

![home-page](https://user-images.githubusercontent.com/43575081/176943993-443ac416-bee3-47b9-be00-c14ee21685c1.png)

If the user clicks on a product, they'll be brought to the relevant [Product Information](#product) page. 


## Product Information <a name="product"/>

The Product Information page has information relevant to the product clicked, such as the **name**, **rating** (out of 5 stars), **description**, and the **price**.

Also found on this page is the ability to add the product to the visitor's cart, with or without opening the cart afterwards ("**Buy Now**" immediately opens the [cart sidebar](#cart)). You can adjust the quantity using the + and - buttons. 

![item-info](https://user-images.githubusercontent.com/43575081/176944015-beec29d4-67f5-46ee-ab4d-7ad4418ae3b5.png)

 
## Cart <a name="cart"/>

The Cart sidebar shows all of the products the user has added to their cart, as well as their subtotal. Here the user can adjust the quantity, and delete each product as they see fit. 

![cart-sidebar](https://user-images.githubusercontent.com/43575081/176944029-5798b2b8-a3de-4c3f-a668-d44509fe11f7.png)

When you're ready you can hit **Pay with Stripe** to open the [Stripe Checkout](#stripe) page. 


## Stripe Checkout <a name="stripe"/>
To fully test the checkout process you can use this dummy information:

| Field | Value |
| ----------- | ----------- |
| Email | _Anything works_ |
| Shipping method | _Anything works_  | 
| Card Number | 4242 4242 4242 4242| 
| Card Expiration Date | 04/24 | 
| Card CVC | 424 | 
| Name on card | _Anything works_  | 
| Country or region | _Anything works_  | 
| Postal/Zip Code | _Anything works_  | 


![stripe-cashout-info](https://user-images.githubusercontent.com/43575081/176944125-58f8e253-0740-4883-8b50-88f5e461efd7.png)

After a successful checkout you'll be greeted with a success message, and a prompt to continue shopping: 

![success-page](https://user-images.githubusercontent.com/43575081/176944127-dd6b1091-c18e-45ed-bd83-f1ca51b1b35f.png)

## Sanity <a name="sanity"/>

This project makes use of [Sanity.io](https://www.sanity.io/) to easily manipulate our store data. 

With Sanity we can update the name, price, description, pictures, etc. of each product, and change the banner of the home page to reflect new product sales. Best of all, it's super user-friendly, so a client doesn't need to know how to code in order to keep their website up to date. 

![sanity-profile](https://user-images.githubusercontent.com/43575081/176944277-ed7211c6-5781-4f59-bc0f-36b2eaf90fb9.png)


## Environment Variables <a name="env"/>

In order to use your own data for this, you'll need to create a _.env_ file with these attributes inside: 

![env](https://user-images.githubusercontent.com/43575081/176936650-f31e6795-8a15-4c0d-bc96-7d19945347ac.png)

**Your Sanity Key** can be created by making an account [here](https://www.sanity.io/). <br/>
**Your Stripe Publishable & Secret Keys** can be created by making an account [here](https://stripe.com/en-ca).

Never used **Sanity** before? Check out [this video](https://www.youtube.com/watch?v=2ceM_tSus_M). 

Or, you can always ➡ **Try the [LIVE DEMO](https://my-store-phi.vercel.app/)** ⬅ 

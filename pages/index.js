import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ productData, bannerData }) => {
	return (
		<>
			{/* If the bannerData prop successfully returned an array, return the first value of the array */}
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />

			<div className="products-heading">
				<h2>Best Selling Products</h2>
				<p>Speakers</p>
			</div>
			<div className="products-container">
				{/* If the productData prop successfully returned an array, return a product component */}
				{productData?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>

			<FooterBanner footerBanner={bannerData && bannerData[0]} />
		</>
	);
};

export const getServerSideProps = async () => {
	//Grab all our products from our Sanity dashboard
	const productQuery = '*[_type == "product"]';
	const productData = await client.fetch(productQuery);

	//Grab the banner data from our Sanity dashboard
	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { productData, bannerData },
	};
};

export default Home;

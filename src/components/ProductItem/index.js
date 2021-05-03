import React, { useState } from "react";
import { addToCart } from "../../redux/actionCreators";
import { connect } from "react-redux";

function ProductItem({ product, addToCart }) {
	const { name, price, description, image, stocks } = product;
	const handleClick = () => {
		addToCart({
			id: name,
			name: name,
			price: price,
			description: description,
			image: image,
			quantity: 1,
			savings: 0,
			addedAt: Date.now(),
		});
	};

	return (
		<div
			className='shadow-lg m-4 p-4 flex flex-col justify-between
        rounded-md bg-white transform hover:-rotate-2 transition duration-300 w-90 xs:w-80 sm:w-1/3 lg:w-1/4'
		>
			<img src={image} alt={name} className=' xs:h-48 sm:h-64' />
			<div className='mt-4 flex flex-col'>
				<h4 className='text-sm sm:text-lg font-medium flex justify-between border-b-2 border-gray-800 my-2'>
					{name} <span>€ {price}</span>
				</h4>
				<small className='text-xs'>{description}</small>
				{stocks >= 1 ? (
					<button
						onClick={handleClick}
						className='py-1 px-2 bg-gray-700 w-24 rounded-md hover:bg-gray-900 text-white text-xs font-thin my-2 focus:outline-none'
					>
						Add to basket
					</button>
				) : (
					<button
						className='py-1 px-2 bg-gray-400 w-32 rounded-lg text-white text-xs font-thin my-2 cursor-not-allowed'
						disabled
					>
						Out of stock
					</button>
				)}
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item) => dispatch(addToCart(item)),
	};
};

export default connect(null, mapDispatchToProps)(ProductItem);

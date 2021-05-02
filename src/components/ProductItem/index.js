import React from "react";
import { addToCart } from "../../redux/actionCreators";
import { connect } from "react-redux";

function ProductItem({ name, price, description, image, stocks, addToCart }) {
	const handleClick = () => {
		addToCart({
			id: name,
			name: name,
			price: price,
			description: description,
			image: image,
			quantity: 1,
			addedAt: Date.now(),
		});
	};

	return (
		<div
			className='shadow-xl w-1/4 m-4 p-5 flex flex-col justify-between
        rounded-md bg-white transform hover:-rotate-2 transition duration-300'
		>
			<img src={image} alt={name} className='h-72' />
			<div className='mt-4 flex flex-col'>
				<h4 className='text-lg font-medium flex justify-between border-b-2 border-gray-800 my-2'>
					{name} <span>€ {price}</span>
				</h4>
				<small className='text-xs'>{description}</small>
				{stocks >= 1 ? (
					<button
						onClick={handleClick}
						className='py-1 px-2 bg-gray-700 w-32 rounded-lg hover:bg-gray-900 text-white text-sm font-thin my-2 focus:outline-none'
					>
						Add to basket
					</button>
				) : (
					<button
						className='py-1 px-2 bg-gray-400 w-32 rounded-lg text-white text-sm font-thin my-2 cursor-not-allowed'
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

import React, { useEffect } from "react";
import {
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
	updateSavings,
} from "../../redux/actionCreators";
import { connect } from "react-redux";

function CartItem({
	item,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
	updateSavings,
	isSoup,
}) {
	const { id, name, image, price, quantity, savings } = item;

	useEffect(() => {
		if (name === "Bread") {
			if (quantity % 2 === 0 && isSoup) {
				updateSavings(id, price * Math.trunc(quantity / 2));
			} else if (quantity < 2 || !isSoup) {
				updateSavings(id, 0);
			}
		} else if (name === "Cheese") {
			if (quantity % 4 === 0) {
				updateSavings(id, 2 * price * Math.trunc(quantity / 4));
			} else if (quantity % 3 === 0) {
				updateSavings(id, price * Math.trunc(quantity / 3));
			} else if (quantity < 3) {
				updateSavings(id, 0);
			}
		}
	}, [quantity, isSoup]);

	const handleIncreaseClick = () => {
		increaseQuantity(id);
	};

	const handleDecreaseClick = () => {
		decreaseQuantity(id);
	};

	const handleRemoveClick = () => {
		removeFromCart(id);
	};

	return (
		<div className='flex space-x-12 p-4 bg-white'>
			<img src={image} alt={name} className='w-24 h-24' />
			<div className='space-y-2 w-48'>
				<h4 className='text-lg font-medium'>{name}</h4>
				<p>Price : € {price.toFixed(2)}</p>
				<div className='flex w-24 justify-between my-4'>
					<button
						onClick={quantity > 1 ? handleDecreaseClick : handleRemoveClick}
						className='bg-gray-200 font-semibold hover:bg-gray-300 rounded-full h-6 w-6 flex justify-center items-center focus:outline-none'
					>
						-
					</button>
					<p>{quantity}</p>
					<button
						onClick={handleIncreaseClick}
						className='bg-gray-200 font-semibold hover:bg-gray-300 rounded-full h-6 w-6 flex justify-center items-center focus:outline-none'
					>
						+
					</button>
				</div>
			</div>
			<div className='flex flex-col'>
				<p className='text-gray-500'>
					Item total : € {(price * quantity).toFixed(2)}
				</p>
				<p className='text-green-500'>Item saving : € {savings.toFixed(2)} </p>
				<p className='text-gray-500'>
					Item total : € {(price * quantity - savings).toFixed(2)}{" "}
				</p>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		increaseQuantity: (id) => dispatch(increaseQuantity(id)),
		decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
		removeFromCart: (id) => dispatch(removeFromCart(id)),
		updateSavings: (id, newSavings) => dispatch(updateSavings(id, newSavings)),
	};
};

export default connect(null, mapDispatchToProps)(CartItem);

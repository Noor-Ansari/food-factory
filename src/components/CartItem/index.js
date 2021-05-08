import React, { useEffect } from "react";
import { updateCart } from "../../redux/actionCreators";
import { connect } from "react-redux";
import {
	increaseItemQuantity,
	decreaseItemQuantity,
	removeItem,
	updateItemSaving,
} from "./Logic";

function CartItem({ item, user, updateCart, isSoup }) {
	const { name, image, price, quantity, savings } = item;

	useEffect(async () => {
		if (name === "Bread") {
			if (quantity % 2 === 0 && isSoup) {
				const updatedData = await updateItemSaving(
					name,
					user.userId,
					price * Math.trunc(quantity / 2)
				);
				if (updatedData) {
					updateCart(updatedData.cart);
				}
			} else if (quantity < 2 || !isSoup) {
				const updatedData = await updateItemSaving(name, user.userId, 0);
				if (updatedData) {
					updateCart(updatedData.cart);
				}
			} else if (name === "Cheese") {
				if (quantity % 4 === 0) {
					const updatedData = await updateItemSaving(
						name,
						user.userId,
						2 * price * Math.trunc(quantity / 4)
					);
					if (updatedData) {
						updateCart(updatedData.cart);
					}
				} else if (quantity % 3 === 0) {
					const updatedData = await updateItemSaving(
						name,
						user.userId,
						price * Math.trunc(quantity / 3)
					);
					if (updatedData) {
						updateCart(updatedData.cart);
					}
				} else if (quantity < 3) {
					const updatedData = await updateItemSaving(name, user.userId, 0);
					if (updatedData) {
						updateCart(updatedData.cart);
					}
				}
			}
		}
	}, [quantity, isSoup]);

	const handleIncreaseClick = async () => {
		const updatedData = await increaseItemQuantity(user.userId, name);
		if (updatedData) {
			updateCart(updatedData.cart);
		}
	};

	const handleDecreaseClick = async () => {
		if (quantity > 1) {
			const updatedData = await decreaseItemQuantity(user.userId, name);
			if (updatedData) {
				updateCart(updatedData.cart);
			}
		} else {
			const updatedData = await removeItem(user.userId, name);
			if (updatedData) {
				updateCart(updatedData.cart);
			}
		}
	};

	return (
		<div className='flex p-4 bg-white'>
			<img
				src={image}
				alt={name}
				className='w-24 h-24 hidden sm:block sm:mr-6'
			/>
			<div className='space-y-2 w-32'>
				<h4 className='text-lg font-medium'>{name}</h4>
				<p className='text-sm'>Price : € {price.toFixed(2)}</p>
				<div className='flex w-20 justify-between items-center my-4'>
					<button
						onClick={handleDecreaseClick}
						className='bg-gray-200 font-semibold hover:bg-gray-300 rounded-full h-6 w-6 flex justify-center items-center focus:outline-none'
					>
						-
					</button>
					<p className='text-sm'>{quantity}</p>
					<button
						onClick={handleIncreaseClick}
						className='bg-gray-200 font-semibold  hover:bg-gray-300 rounded-full h-6 w-6 flex justify-center items-center focus:outline-none'
					>
						+
					</button>
				</div>
			</div>
			<div className='flex flex-col'>
				<p className='text-gray-500 text-sm'>
					Item total : € {(price * quantity).toFixed(2)}
				</p>
				<p className='text-green-500 text-sm'>
					Item saving : € {savings.toFixed(2)}{" "}
				</p>
				<p className='text-gray-500 text-sm'>
					Item total : € {(price * quantity - savings).toFixed(2)}{" "}
				</p>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateCart: (newCart) => dispatch(updateCart(newCart)),
	};
};

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

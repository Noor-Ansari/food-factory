import React from "react";
import { setModalText, setModal, updateCart } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { addItemToCart } from "./Logic";

function ProductItem({ user, product, updateCart, setModal, setModalText }) {
	const { name, price, description, image, stocks } = product;

	const handleClick = async () => {
		if (user) {
			const updatedData = await addItemToCart(name, price, image, user.userId);
			if (updatedData) {
				updateCart(updatedData.cart);
				setModalText(`${name} added to cart`);
				setModal(true);
			} else {
				setModalText("Somethig went wrong");
				setModal(true);
			}
		} else {
			setModalText("Login to add the items");
			setModal(true);
		}
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
		updateCart: (newCart) => dispatch(updateCart(newCart)),
		setModalText: (modalText) => dispatch(setModalText(modalText)),
		setModal: (state) => dispatch(setModal(state)),
	};
};

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

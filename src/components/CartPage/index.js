import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";
import { Link } from "react-router-dom";
import { fetchUserData } from "../../helpers/userHelpers";
import { updateCart } from "../../redux/actionCreators";
import { getTotal, getTotalSavings } from "./Logic";

function CartPage({ cart, user, updateCart }) {
	const [isSoup, setIsSoup] = useState(false);
	useEffect(() => {
		(async () => {
			cart.map((item) => {
				if (item.name === "Soup") {
					setIsSoup(true);
				}
			});
			if (user) {
				const { userData } = await fetchUserData(user.userId);
				if (userData.cart) {
					updateCart(userData.cart);
				}
			}
		})();
	}, []);

	const sortedCart = cart.sort((a, b) => b.addedAt - a.addedAt);

	return (
		<>
			{user ? (
				<>
					{sortedCart.length ? (
						<main className='flex flex-col sm:flex-row justify-evenly my-16 sm:my-24'>
							<div className='divide-y-2 w-full sm:w-1/2'>
								<div className='bg-gray-600 text-white my-auto py-2 px-4 text-xl font-semibold'>
									Your Cart : ({sortedCart.length})
								</div>
								{sortedCart.map((item) => (
									<CartItem item={item} key={item.addedAt} isSoup={isSoup} />
								))}
							</div>
							<CartSummary
								totalPrice={getTotal(sortedCart)}
								totalSavings={getTotalSavings(sortedCart)}
							/>
						</main>
					) : (
						<main className='flex flex-col items-center  justify-center my-64'>
							<h1 className='text-xl sm:text-2xl mb-4 font-semibold'>
								Your cart is empty...
							</h1>
							<Link
								to='/'
								className='text-sm bg-gray-700 hover:bg-gray-900 text-white py-1 px-2 rounded-md'
							>
								Go to home
							</Link>
						</main>
					)}
				</>
			) : (
				<main className='flex flex-col items-center  justify-center my-64'>
					<h1 className='text-xl sm:text-2xl mb-4 font-semibold'>
						Login to manage cart...
					</h1>
					<Link
						to='/login'
						className='text-sm bg-gray-700 hover:bg-gray-900 text-white py-1 px-2 rounded-md'
					>
						Login
					</Link>
				</main>
			)}
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateCart: (newCart) => dispatch(updateCart(newCart)),
	};
};

const mapStateToProps = (state) => {
	return {
		cart: state.userReducer.cart,
		user: state.userReducer.user,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

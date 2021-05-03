import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";

function CartPage({ cart }) {
	sessionStorage.setItem("cart", JSON.stringify(cart));
	const [isSoup, setIsSoup] = useState(false);

	const getTotal = (cart) => {
		const productsTotal = cart.map((item) => item.quantity * item.price);
		const grandTotal = productsTotal.reduce(
			(total, current) => total + current
		);
		return grandTotal;
	};

	const getTotalSavings = (cart) => {
		const savingsTotal = cart.map((item) => item.savings);
		const savingsGrandTotal = savingsTotal.reduce(
			(total, current) => total + current
		);
		return savingsGrandTotal;
	};

	useEffect(() => {
		cart.map((item) => {
			if (item.name === "Soup") {
				setIsSoup(true);
			}
		});
	}, []);

	return (
		<main className='flex justify-evenly my-24'>
			<div className='ml-12 divide-y-2 w-1/2'>
				<div className='h-12 bg-white flex items-center p-4 text-xl font-semibold'>
					Your Cart : ({cart.length})
				</div>
				{cart.map((item) => (
					<CartItem item={item} key={item.addedAt} isSoup={isSoup} />
				))}
			</div>
			<CartSummary
				totalPrice={getTotal(cart)}
				totalSavings={getTotalSavings(cart)}
			/>
		</main>
	);
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(CartPage);

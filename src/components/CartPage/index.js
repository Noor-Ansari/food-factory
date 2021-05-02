import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";

function CartPage({ cart }) {
	sessionStorage.setItem("cart", JSON.stringify(cart))
	return (
		<div className='my-12 ml-12 divide-y-2 w-1/2'>
			<div className='h-12 bg-white flex items-center p-4 text-xl font-semibold'>Your Cart : ({cart.length})</div>
			{cart.map((item) => (
				<CartItem item={item} />
			))}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(CartPage);

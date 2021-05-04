import React from "react";

function CartSummary({ totalPrice, totalSavings }) {
	return (
		<div className='h-40 w-full sm:w-64 bg-gray-600 text-white flex flex-col p-4 divide-y-2 sm:rounded shadow-xl'>
			<h4 className='text-xl font-semibold'>Cart Summary :</h4>
			<div className='my-2 py-4'>
				<p className='text-sm'>Subtotal : € {totalPrice.toFixed(2)}</p>
				<p className='text-sm'>Savings : € {totalSavings.toFixed(2)}</p>
				<p className='text-sm'>
					Total : € {(totalPrice - totalSavings).toFixed(2)}
				</p>
			</div>
		</div>
	);
}

export default CartSummary;

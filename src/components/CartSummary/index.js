import React from 'react'

function CartSummary({totalPrice, totalSavings}) {
    return (
        <div className="h-48 w-64 bg-gray-600 text-white flex flex-col p-4 divide-y-2 rounded shadow-xl">
            <h4 className="text-xl font-semibold">Cart Summary :</h4>
            <div className="my-2 py-4">
            <p>Subtotal : € {totalPrice.toFixed(2)}</p>
            <p>Savings : € {totalSavings.toFixed(2)}</p>
            <p>Total : € {(totalPrice - totalSavings).toFixed(2)}</p>
          </div>
        </div>
    )
}

export default CartSummary;

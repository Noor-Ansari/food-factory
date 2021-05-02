import React from "react";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/actionCreators";
import { connect } from "react-redux";

function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {
	const { id, name, image, price, description, quantity } = item;

	const handleIncreaseClick = () => {
		increaseQuantity(id);
	};

	const handleDecreaseClick = () => {
		decreaseQuantity(id);
	};

    const handleRemoveClick = () => {
        removeFromCart(id)
    }

	return (
		<div className='flex space-x-12 p-4 bg-white'>
			<img src={image} alt={name} className='w-24 h-24' />
			<div className="space-y-2 w-48">
				<h4 className='text-lg font-medium'>{name}</h4>
				<p>Quantity :{quantity}</p>
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
            <div className="flex flex-col">
                <p>Unit Price : € {price.toFixed(2)}</p>
                <p>Total : € {(price*quantity).toFixed(2)} </p>
                </div>
		    </div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		increaseQuantity: (id) => dispatch(increaseQuantity(id)),
        decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
	};
};

export default connect(null, mapDispatchToProps)(CartItem);

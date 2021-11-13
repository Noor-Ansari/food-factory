import React, { useEffect, useCallback } from "react";
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

  const checkAndUpdateSavings = useCallback(async () => {
    let newSavings;
    if (name === "Bread") {
      newSavings = isSoup ? price / 2 : 0;
    } else if (name === "Cheese" && quantity % 2 === 0) {
      newSavings = (price * quantity) / 2;
    } else if (name === "Peanut Butter") {
      newSavings = (quantity * price) / 3;
    }
    if (newSavings !== undefined && savings !== newSavings) {
      console.log("updating savings");
      const updatedCart = await updateItemSaving(name, user.userId, newSavings);
      updatedCart && updateCart(updatedCart);
    }
  }, [isSoup, name, quantity, price, updateCart, user.userId, savings]);

  const handleIncreaseClick = async () => {
    const updatedCart = await increaseItemQuantity(user.userId, name);
    updatedCart && updateCart(updatedCart);
  };

  const handleDecreaseClick = async () => {
    if (quantity > 1) {
      const updatedCart = await decreaseItemQuantity(user.userId, name);
      updatedCart && updateCart(updatedCart);
    } else {
      const updatedCart = await removeItem(user.userId, name);
      updatedCart && updateCart(updatedCart);
    }
  };

  useEffect(() => {
    user && checkAndUpdateSavings();
  }, [quantity, savings, checkAndUpdateSavings, user]);

  return (
    <div className="flex p-4 bg-white">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 hidden sm:block sm:mr-6"
      />
      <div className="space-y-2 w-32">
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-sm">Price : € {price.toFixed(2)}</p>
        <div className="flex w-20 justify-between items-center my-4">
          <button
            onClick={handleDecreaseClick}
            className="bg-gray-200 font-semibold hover:bg-gray-300 rounded-full h-6 w-6 flex justify-center items-center focus:outline-none"
          >
            -
          </button>
          <p className="text-sm">{quantity}</p>
          <button
            onClick={handleIncreaseClick}
            className="bg-gray-200 font-semibold  hover:bg-gray-300 rounded-full h-6 w-6 flex justify-center items-center focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-500 text-sm">
          Item total : € {(price * quantity).toFixed(2)}
        </p>
        <p className="text-green-500 text-sm">
          Item saving : € {savings?.toFixed(2)}{" "}
        </p>
        <p className="text-gray-500 text-sm">
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

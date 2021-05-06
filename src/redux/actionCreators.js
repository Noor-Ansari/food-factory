import {
	ADD_PRODUCTS,
	ADD_TO_CART,
	ADD_USER,
	DECREASE_QUANTITY,
	INCREASE_QUANTITY,
	REMOVE_FROM_CART,
	REMOVE_USER,
	SET_LOADER,
	SET_MODAL,
	SET_MODAL_TEXT,
	UPDATE_SAVINGS,
} from "./constants";

export const addProducts = (products) => {
	return {
		type: ADD_PRODUCTS,
		payload: products,
	};
};

export const addToCart = (item) => {
	return {
		type: ADD_TO_CART,
		payload: item,
	};
};

export const removeFromCart = (id) => {
	return {
		type: REMOVE_FROM_CART,
		payload: id,
	};
};

export const increaseQuantity = (id) => {
	return {
		type: INCREASE_QUANTITY,
		payload: id,
	};
};

export const decreaseQuantity = (id) => {
	return {
		type: DECREASE_QUANTITY,
		payload: id,
	};
};

export const updateSavings = (id, newSavings) => {
	return {
		type: UPDATE_SAVINGS,
		payload: { id, newSavings },
	};
};

export const addUser = (user) => {
	return {
		type : ADD_USER,
		payload: user
	};
};

export const removeUser = () => {
	return {
		type : REMOVE_USER,
		payload: ""
	};
};

export const setModal = (state) => {
	return {
		type : SET_MODAL,
		payload: state,
	};
};

export const setLoader = (state) => {
	return {
		type : SET_LOADER,
		payload: state
	};
};

export const setModalText = (modalText) => {
	return {
		type : SET_MODAL_TEXT,
		payload: modalText
	};
};


import {
	ADD_PRODUCTS,
	UPDATE_CART,
	ADD_USER,
	REMOVE_USER,
	SET_LOADER,
	SET_MODAL,
	SET_MODAL_TEXT,
} from "./constants";

export const addProducts = (products) => {
	return {
		type: ADD_PRODUCTS,
		payload: products,
	};
};

export const updateCart = (newCart) => {
	return {
		type: UPDATE_CART,
		payload: newCart,
	};
};

export const addUser = (user) => {
	return {
		type: ADD_USER,
		payload: user,
	};
};

export const removeUser = () => {
	return {
		type: REMOVE_USER,
		payload: "",
	};
};

export const setModal = (state) => {
	return {
		type: SET_MODAL,
		payload: state,
	};
};

export const setLoader = (state) => {
	return {
		type: SET_LOADER,
		payload: state,
	};
};

export const setModalText = (modalText) => {
	return {
		type: SET_MODAL_TEXT,
		payload: modalText,
	};
};

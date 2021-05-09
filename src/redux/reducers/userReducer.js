import { ADD_USER, REMOVE_USER, UPDATE_CART } from "../constants";

const initialState = {
	user: JSON.parse(sessionStorage.getItem("user")) || "",
	cart: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				user: action.payload,
				cart: action.payload.cart,
			};
		case REMOVE_USER:
			return {
				...state,
				user: action.payload,
				cart: [],
			};
		case UPDATE_CART:
			return {
				...state,
				cart: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;

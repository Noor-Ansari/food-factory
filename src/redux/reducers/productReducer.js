import { ADD_PRODUCTS } from "../constants";

const initialState = {
	products: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;

import { ADD_USER, REMOVE_USER } from "../constants";

const initialState = {
	user: "",
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				user: action.payload,
			};
		case REMOVE_USER:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;

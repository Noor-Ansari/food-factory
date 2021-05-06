import { SET_LOADER, SET_MODAL, SET_MODAL_TEXT } from "../constants";

const initialState = {
	modal: false,
	modalText: "",
	loader : false,
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MODAL:
			return {
				...state,
				modal: action.payload,
			};
        case SET_MODAL_TEXT:
            return {
                ...state,
                modalText : action.payload
			}
		case SET_LOADER:
			return {
				...state,
				loader : action.payload
			}
		default:
			return state;
	}
};

export default modalReducer;

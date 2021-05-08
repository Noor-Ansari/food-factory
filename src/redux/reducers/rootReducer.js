import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
	modalReducer: modalReducer,
	userReducer: userReducer,
	productReducer: productReducer,
});

export default rootReducer;

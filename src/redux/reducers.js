import { ADD_PRODUCTS, ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./constants";

const initialState = {
    products: JSON.parse(sessionStorage.getItem("products")) || [],
    user: "",
    cart: JSON.parse(sessionStorage.getItem("cart")) || [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                products : action.payload
            }
        case ADD_TO_CART:
            const isExist = state.cart.filter(item => item.id === action.payload.id)
            
            const newCart = state.cart.filter(item => item.id !== action.payload.id)
            
            isExist.length && (isExist[0].quantity += 1)

            return {
                ...state,
                cart : [...newCart, isExist.length ? ({...isExist[0]}) : { ...action.payload } ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart : [...state.cart.filter(item => item.id !== action.payload )]
            }
        
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart : [...state.cart.map(item => item.id === action.payload ? {'quantity' :  item.quantity +=1 , ...item} : item = {...item})]
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                cart : [...state.cart.map(item => item.id === action.payload ? {'quantity' :  item.quantity -=1 , ...item} : item = {...item})]
            }
        default:
            return state
    }
}

export default rootReducer;
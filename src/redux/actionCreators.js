import { ADD_PRODUCTS, ADD_TO_CART, ADD_USER } from "./constants"

export const addProducts = (products) => {
    return {
        type: ADD_PRODUCTS,
        payload : products
    }
}

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload : user
    }
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload : item
    }
}
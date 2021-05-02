import { ADD_PRODUCTS, ADD_TO_CART, ADD_USER, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./constants"

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

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload : id
    }
}

export const increaseQuantity = (id) => {
    return {
        type: INCREASE_QUANTITY,
        payload : id
    }
}

export const decreaseQuantity = (id) => {
    return {
        type: DECREASE_QUANTITY,
        payload : id
    }
}
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    GET_ALL_PIZZAS,
    OPEN_ADD_TO_CART_MODAL,
    CLOSE_ADD_TO_CART_MODAL,
    GET_ORDERS
} from './action-types/cart-actions'
import axios from "axios";
import React from "react";

export const getOrder = () => async dispatch => {
   const response = await axios.get('/orders');
   dispatch({type: GET_ORDERS, payload: response.data})
};

export const getAllPizzas = () => async dispatch => {
    const response = await axios.get('/home');
    dispatch({type: GET_ALL_PIZZAS, payload: response.data})
};

export const addShipping = (data) =>

    axios.post('/order', {
        name: data.name,
        contact: data.contact,
        address: data.address,
        amount: data.amount
    }).then(response =>{
        console.log(response);
    }).catch(error =>{
        console.log(error);
    });


//add cart action
export const addToCart = (id) =>{
    return{
        type: ADD_TO_CART,
        id
    }
};
//remove item action
export const removeItem= (id) =>{
    return{
        type: REMOVE_ITEM,
        id
    }
};
//subtract qt action
export const subtractQuantity= (id) =>{
    return{
        type: SUB_QUANTITY,
        id
    }
};
//add qt action
export const addQuantity= (id) =>{
    return{
        type: ADD_QUANTITY,
        id
    }
};

export const openAddToCartModal= () =>{
    return{
        type: OPEN_ADD_TO_CART_MODAL
    }
};


export const closeAddToCartModal= () =>{
    return{
        type: CLOSE_ADD_TO_CART_MODAL
    }
};


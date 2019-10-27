import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    GET_ALL_PIZZAS,
    OPEN_ADD_TO_CART_MODAL,
    CLOSE_ADD_TO_CART_MODAL,
    ADD_SHIPPING
} from './actions/action-types/cart-actions'

const initState = {
    items: [],
    addedItems:[],
    total: 0,
    addToCartModalIsShowing: false,
    shipping: [],
    redirect: false
};
const cartReducer = (state = initState, action) => {

    if (action.type === ADD_SHIPPING) {
        return { ...state, shipping: action.payload, redirect: true}
    }

    if (action.type === GET_ALL_PIZZAS) {
        return { ...state, items: action.payload}
    }

    if (action.type === OPEN_ADD_TO_CART_MODAL) {
        return { ...state, addToCartModalIsShowing: true}
    }

    if (action.type === CLOSE_ADD_TO_CART_MODAL) {
        return { ...state, addToCartModalIsShowing: false}
    }

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id);
        let value = parseFloat(addedItem.price.replace("$", ""));
        if (existed_item) {
            addedItem.quantity += 1;
            return {
                ...state,
                //total: state.total + addedItem.price
                total: state.total + value
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            //let newTotal = state.total + addedItem.price
            let newTotal = state.total + value;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id);
        let new_items = state.addedItems.filter(item => action.id !== item.id);
        let value = parseFloat(itemToRemove.price.replace("$", ""));
        //calculating the total
        //let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        let newTotal = state.total - (value.toFixed(2) * itemToRemove.quantity);

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        let value = parseFloat(addedItem.price.replace("$", ""));
        addedItem.quantity += 1;
       // let newTotal = state.total + addedItem.price
        let newTotal = state.total + value;
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        let value = parseFloat(addedItem.price.replace("$", ""));
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id);
            //let newTotal = state.total - addedItem.price
            let newTotal = state.total - value;
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1;
            //let newTotal = state.total - addedItem.price
            let newTotal = state.total - value;
            return {
                ...state,
                total: newTotal
            }
        }

    }
    return state
};

export default cartReducer

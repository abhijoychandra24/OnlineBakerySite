export const initialState = {
    cart: [],
    loggedinuser: null
}

const reducer = (state, action) => {
    // console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            }
        case 'REMOVE_FROM_CART':
            let newcart = [...state.cart];
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            if(index >= 0) {
                newcart.splice(index, 1);
            } else {
                console.log("There were error while removing item from cart.");
            }
            return {
                ...state,
                cart: newcart
            }
    }
}

export default reducer;
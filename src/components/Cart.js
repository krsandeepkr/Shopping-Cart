import React, {createContext, useEffect, useReducer } from 'react';
import './Cart.css';

import { product } from './product';
import ContextCart from './ContextCart';
import { reducer  } from './reducer';

export const CartContext = createContext();

const initialState = {
    item: product,
    totalAmount: 0,
    totalItem: 0,
};

const Cart = () => {

   // const [item , setItem] = useState(product);
   const [state, dispatch] = useReducer(reducer, initialState); 

   // to remove the individual elements from an Item Cart
   const removeItem = (id) => {
    return dispatch({
        type: "REMOVE_ITEM",
        payload: id,
    });
   };

   // Clear the Cart
   const clearCart = () => {
    return dispatch ({type: "CLEAR_CART"});
   };

   // Increment the item

   const increment = (id) => {
    return dispatch({
        type: "INCREMENT",
        payload: id
    });
   };

    // Decrement the item

    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id
        });
       };

       // We will use the useEffect to update the data

       useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        
      }, [state.item]);


  return (
    <CartContext.Provider value = {{...state, removeItem, clearCart, increment, decrement }}>

    <ContextCart/>
    </CartContext.Provider>
    

  );
};

export default Cart

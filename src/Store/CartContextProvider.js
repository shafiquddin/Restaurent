import React, { useReducer, useState } from "react";
import CartContext from "./Cart-Context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updateItems, totalAmount: updateAmount };
  }
  return defaultState;
};

const CartContextProvider = (props) => {
  const [cartState, setCartState] = useReducer(cartReducer, defaultState);
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  const addItemHandler = (item) => {
    setCartState({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    setCartState({ type: "REMOVE", id: id });
  };

  console.log(cartState);

  const cartContext = {
    showCart: showCart,
    onShow: showCartHandler,
    onHide: hideCartHandler,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;

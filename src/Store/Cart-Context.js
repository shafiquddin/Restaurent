import React from "react";
const CartContext = React.createContext({
  showCart: false,
  onShow: () => {},
  onHide: () => {},
  items: [],
  totalAmount: 0,
  addItem: (id) => {},
  removeItem: (id) => {},
});

export default CartContext;

import React from "react";
const CartContext = React.createContext({
  showCart: false,
  onShow: () => {},
  onHide: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

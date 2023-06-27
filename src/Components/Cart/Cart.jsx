import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";

const Cart = () => {
  const ctx = useContext(CartContext);
  console.log(ctx.items);
  const cartIems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartIems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>35.95</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onHide}>
          close
        </button>
        <button className={classes.button}>Submit</button>
      </div>
    </Modal>
  );
};

export default Cart;

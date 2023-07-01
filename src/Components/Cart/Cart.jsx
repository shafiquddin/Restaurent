import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
import CartIem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const onAddHandler = (item) => {
    ctx.addItem(item);
  };
  const onRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartIems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartIem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartIems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onHide}>
          close
        </button>
        {ctx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

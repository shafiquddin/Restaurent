import Model from "../UI/Model";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Shushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};
export default Cart;

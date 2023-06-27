import classes from "./ButtonCart.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";

const ButtonCart = () => {
  const ctx = useContext(CartContext);
  const numberOfCart = ctx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  console.log(numberOfCart);
  return (
    <button className={classes.button} onClick={ctx.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCart}</span>
    </button>
  );
};

export default ButtonCart;

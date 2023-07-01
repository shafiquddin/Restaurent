import classes from "./ButtonCart.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/Cart-Context";

const ButtonCart = () => {
  const [btnIsHighligthed, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const cartItems = ctx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighligthed ? classes.bump : ""
  }`;

  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={ctx.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default ButtonCart;

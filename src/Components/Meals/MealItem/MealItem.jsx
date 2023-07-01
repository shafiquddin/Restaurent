import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-Context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onAddCartHandler = (amount) => {
    ctx.addItem({
      name: props.name,
      description: props.description,
      price: props.price,
      id: props.id,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.decription}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={onAddCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

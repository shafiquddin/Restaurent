import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import React, { useContext, useRef } from "react";
import CartContext from "../../../Store/Cart-Context";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);
  const amounInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    ctx.addItem({ ...props.item, amount: +amounInputRef.current.value });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amounInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

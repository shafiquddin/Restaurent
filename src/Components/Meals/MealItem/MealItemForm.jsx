import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import React, { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNo = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNo < 1 ||
      enteredAmountNo > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddCart(enteredAmountNo);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
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
      {!amountIsValid && <p>please enter valid Amount</p>}
    </form>
  );
};

export default MealItemForm;

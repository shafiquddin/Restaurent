import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import React from "react";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
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

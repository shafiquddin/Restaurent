import classes from "./Input.module.css";
import React, { useState } from "react";
const Input = (props) => {
  const [defaultValue, setDefaultValue] = useState("1");
  const changeHandler = (event) => {
    setDefaultValue(+event.target.value);

  };
  console.log(defaultValue);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={changeHandler} />
    </div>
  );
};
export default Input;

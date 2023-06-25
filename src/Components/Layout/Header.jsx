import { Fragment } from "react";
import classes from "./Header.module.css";
import mainImg from "../../assets/meals.jpg";
import ButtonCart from "./ButtonCart";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <ButtonCart />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="restaurent" />
      </div>
    </Fragment>
  );
};

export default Header;

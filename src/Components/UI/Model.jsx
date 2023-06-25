import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";

const Backdrop = () => <div className={classes.backdrop}></div>;
const Overlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const Model = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portalElement)}
    </Fragment>
  );
};

export default Model;

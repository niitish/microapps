import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const finalClass = `${classes.modal} ${props.className}`;

  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={props.onCancel} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className={finalClass}>{props.children}</div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

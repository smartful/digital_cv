"use client"
import styles from "./Button.module.css";

const Button = ({children, onclick = () => {}, disabled = false}) => {
  return (
    <button
      className={styles.button}
      onClick={() => onclick()}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

export default Button;

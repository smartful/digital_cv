"use client";
import styles from "./Button.module.css";

const Button = ({
  children,
  onclick = () => {},
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={styles.button}
      onClick={() => onclick()}
      disabled={disabled ? true : false}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Arrow } from "../../icons";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "withIcon" | "contained" | "outlined";
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  disabled,
  children,
  ...rest
}) => {
  const rootClassName = clsx(
    styles.button,
    styles[`button-${variant}`],
    className
  );

  return (
    <button {...rest} className={rootClassName} disabled={disabled}>
      {children}
      <Arrow />
    </button>
  );
};

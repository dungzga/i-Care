"use client"

import { CSSProperties, FC, HTMLAttributes, useEffect } from "react";
import styles from "./ActionButton.module.css";

export interface IActionButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  buttonColor?: "purple" | "green" | "yellow";
  customStyled?: CSSProperties
}

export const ActionButton: FC<IActionButtonProps> = (props) => {
  const { isDisabled = false, buttonColor, customStyled, children } = props;
  var buttonStyle;

  if (buttonColor == "purple") {
    buttonStyle = styles.purple
  } else if (buttonColor == "green") {
    buttonStyle = styles.green
  } else if (buttonColor == "yellow") {
    buttonStyle = styles.yellow
  } else {
    buttonStyle = styles.defaultButton;
  }

  return (
    <button
      style={customStyled}
      className={`${buttonStyle} ${styles.defaultButton}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

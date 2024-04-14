"use client"

import { FC, HTMLAttributes } from "react";
import styles from "./CommonButton.module.css";

export interface ICommonButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}

export const CommonButton: FC<ICommonButtonProps> = (props) => {
  const { isDisabled = false, children } = props;

  return (
    <button
      className={isDisabled ? styles.disabledButton : styles.commonButton}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

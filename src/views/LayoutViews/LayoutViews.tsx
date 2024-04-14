"use client"

import { CSSProperties, FC, HTMLAttributes } from "react"
import styles from "./LayoutViews.module.css"

interface TLayoutInterface extends HTMLAttributes<HTMLDivElement> {
    customStyled?: CSSProperties
}

export const LayoutViews: FC<TLayoutInterface> = (props) => {
    const { customStyled, children } = props
    return (
        <div className={styles.container} style={customStyled}>
            {children}
        </div>
    )
}

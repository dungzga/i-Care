"use client"

import { CSSProperties, FC, HTMLAttributes, useEffect, useState } from "react"
import styles from "./LayoutViews.module.css"

interface TLayoutInterface extends HTMLAttributes<HTMLDivElement> {
    customStyled?: CSSProperties
}

export const LayoutViews: FC<TLayoutInterface> = (props) => {
    const { customStyled, children } = props
    const [hydrated, setHydrated] = useState(false);
        useEffect(() => {
            setHydrated(true);
        },[])
        
    return (
        <div className={styles.container} style={customStyled}>
            {hydrated && children}
        </div>
    )
}

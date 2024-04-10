"use client"

import { FC, HTMLAttributes } from "react"
import Image from "next/image"
import styles from "./Emoticons.module.css"

interface TEmoticionInterface extends HTMLAttributes<HTMLDivElement> {
    emoType: string,
    emoticonSelected: string

}

export const Emoticons: FC<TEmoticionInterface> = (props) => {
    const { emoType, emoticonSelected, ...divProps } = props;

    return (
        <>
            {emoType == "delighted" && 
                <div className={emoticonSelected == "delighted" ? `${styles.wrapper} ${styles.delightedBackground}` : `${styles.wrapper}`} {...divProps}>
                    <Image 
                    width={95}
                    height={95}
                    src="/delight.png"
                    alt="delight"
                    />
                    <span>
                    Delighted
                    </span>
                </div>
            }
            {emoType == "motivated" && 
                <div className={emoticonSelected == "motivated" ? `${styles.wrapper} ${styles.motivatedBackground}` : `${styles.wrapper}`} {...divProps}>
                    <Image 
                    width={95}
                    height={95}
                    src="/motivated.png"
                    alt="motivated"
                    />
                    <span className={styles.emoticonText}>
                    Motivated
                    </span>
                </div>
            }
            {emoType == "irritated" && 
                <div className={emoticonSelected == "irritated" ? `${styles.wrapper} ${styles.irritatedBackground}` : `${styles.wrapper}`} {...divProps}>
                    <Image 
                    width={95}
                    height={95}
                    src="/irritated.png"
                    alt="irritated"
                    />
                    <span>
                    Irritated
                    </span>
                </div>
            }
        </>
    )
}
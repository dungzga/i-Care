"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image";
import styles from "./Quote.module.css"
import { CommonButton } from "@/components/core/Button";

export const QuoteViews: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
          }, 4000);
      
          // Cleanup function to clear the timeout if the component unmounts
          return () => clearTimeout(timeoutId);
    },[])

    return (
        <>
        {isLoading && 
        <div className={styles.wrapper}>
        <div className={`${styles.bounceBox} ${styles.bounce}`}>
                <Image 
                width={100}
                height={100}
                src="/smile.png"
                alt="smiling"
                />
            </div>
        <div>
        <span className={styles.title}>
                This is your quote of the day
        </span>
        </div>
        </div>
        }
        {
            !isLoading && 
            <div className={styles.wrapper}>
                <span className={`${styles.fadeInBox} ${styles.fadein} ${styles.quote}`}>
                “Life isn’t about finding yourself. Life is about creating yourself.”
                </span>
            </div>
        }
        </>
    )
}

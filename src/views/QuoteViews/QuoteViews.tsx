"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image";
import styles from "./Quote.module.css"
import { CommonButton } from "@/components/core/CommonButton";
import { Box, CircularProgress, Stack } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { QuotesData } from "@/temp-db/quotes";

export const QuoteViews: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const searchParams = useSearchParams()
    const feeling = searchParams.get('feeling');
    
    const [quote, setQuote] = useState<string>("");

    useEffect(() => {
        const randomQuoteNumber = Math.floor(Math.random()*10)*3;
        const randomQuoteContent = QuotesData.filter((item) => item.category == feeling)[randomQuoteNumber].quote_content
        setQuote(randomQuoteContent);
    },[feeling])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [])

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
                        {quote}
                    </span>
                    <Stack position={"absolute"} bottom={"40px"}>
                        <Link href={`/i-care`}>
                            <CommonButton className={`${styles.fadeInBox} ${styles.fadein}`}>
                                <Stack gap={1} flexDirection={"row"} alignItems={"center"}>
                                    <span>Be presented</span>
                                    <Image
                                        width={20}
                                        height={16}
                                        src={"/right-arrow.png"}
                                        alt="right-arrow"
                                    />
                                </Stack>
                            </CommonButton>
                        </Link>
                    </Stack>
                </div>
            }
        </>
    )
}

"use client"

import { FC, useEffect, useState } from "react"
import { Box, Link, Stack, Typography, styled } from "@mui/material"
import { LayoutViews } from "../../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton"
import Image from "next/image"
import { MediationCard } from "@/components/mediation/MediationCard"
import styles from "./MediationStartView.module.css";
import { useSearchParams } from "next/navigation"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const MediationStartViews: FC = () => {
    const searchParams = useSearchParams();
    const mediationType = searchParams.get("mediation");
    const isFocus = mediationType && mediationType == "focus";
    const isDailyThought = mediationType && mediationType == "dailythought";
    const isRelaxation = mediationType && mediationType == "relaxation";

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [timer, setTimer] = useState<number>(0)

    useEffect(() => {
        isFocus && setTimer(300)
        isDailyThought && setTimer(300)
        isRelaxation && setTimer(600)
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 6000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        let timer = setInterval(() => {
            setTimer((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    return 0;
                } else return time - 1;
            });
        }, 1000);
    }, [isLoading])

    return (

        <LayoutViews>
            {isLoading &&
                <div>
                    <Typography variant="h6" fontWeight={"700"} sx={{ marginTop: "40px" }}>
                        Get ready for your session
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={"400"}>
                        Follow your breath in and out
                    </Typography>
                    <Box display={"flex"} flexDirection={"column"} gap={3} marginTop={"80px"}>
                        {isFocus && <div className={styles.purpleLoad}></div>}
                        {isDailyThought && <div className={styles.yellowLoad}></div>}
                        {isRelaxation && <div className={styles.greenLoad}></div>}
                    </Box>
                </div>
            }
            {
                !isLoading && isFocus &&
                <CountdownCircleTimer
                    isPlaying
                    duration={300}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    isSmoothColorTransition
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>

            }
            {
                !isLoading && isDailyThought &&
                <div className={`${styles.fadeInBox} ${styles.fadein} ${styles.dailyThoughtMediation}`}>
                    <CountdownCircleTimer
                        isPlaying
                        duration={300}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 2, 0]}
                        isSmoothColorTransition
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>

                </div>

            }
            {
                !isLoading && isRelaxation &&
                <div className={`${styles.fadeInBox} ${styles.fadein} ${styles.relaxationMediation}`}>
                    <CountdownCircleTimer
                        isPlaying
                        duration={70}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[25, 15, 8, 0]}
                        isSmoothColorTransition
                    >
                        {({ remainingTime }) => {
                            const minutes = Math.floor(remainingTime / 60)
                            const seconds = remainingTime % 60
                          
                            return `${minutes}:${seconds}`
                        }}
                    </CountdownCircleTimer>
                </div>

            }
        </LayoutViews>
    )
}

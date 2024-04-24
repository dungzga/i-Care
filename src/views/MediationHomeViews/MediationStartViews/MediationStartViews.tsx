"use client"

import { FC, useEffect, useRef, useState } from "react"
import { Box, Link, Stack, Typography, styled } from "@mui/material"
import { LayoutViews } from "../../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton"
import Image from "next/image"
import { MediationCard } from "@/components/mediation/MediationCard"
import styles from "./MediationStartView.module.css";
import { useSearchParams } from "next/navigation"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import ReactAudioPlayer from 'react-audio-player';
import { CommonButton } from "@/components/core/CommonButton"

export const MediationStartViews: FC = () => {
    const searchParams = useSearchParams();
    const mediationType = searchParams.get("mediation");
    const isFocus = mediationType && mediationType == "focus";
    const isDailyThought = mediationType && mediationType == "dailythought";
    const isRelaxation = mediationType && mediationType == "relaxation";

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [timer, setTimer] = useState<number>(0)
    const [musicSrc, setMusicSrc] = useState<string>("");
    const audioRef = useRef<any>();
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    // const onStart = () => {
    //     audioRef && audioRef.current.play();
    //     setIsPlaying(true);
    // }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
            audioRef && audioRef.current.play();
            setIsPlaying(true);
        }, 6000);
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        isFocus && setMusicSrc("/music/focus.mp3");
        isDailyThought && setMusicSrc("/music/dailythought.mp3");
        isRelaxation && setMusicSrc("/music/relaxation.mp3");
    },[isFocus, isDailyThought, isRelaxation])

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
                <div className={`${styles.fadeInBox} ${styles.fadein} ${styles.focusMediation}`}>
                    <Typography fontSize={"35px"} color={"#FFFFFF"} textAlign={"center"}>
                        FOCUS ATTENTION
                    </Typography>
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={300}
                        colors={['#F9DD7F', '#FFFFFF']}
                        colorsTime={[20, 0]}
                        isSmoothColorTransition
                        trailColor="#8E97FD"
                    >
                        {({ remainingTime }) => {
                            const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0')
                            const seconds = (remainingTime % 60).toString().padStart(2, '0')

                            return (
                                <div className={styles.countDownWatch}>
                                    {minutes}:{seconds}
                                </div>
                            )
                        }}
                    </CountdownCircleTimer>
                    {/* <CommonButton
                    onClick={onStart}
                    isDisabled={isPlaying}
                    style={{backgroundColor : "#F9DD7F", marginTop: "16px", fontWeight: "500"}}>
                        Let's begin
                    </CommonButton> */}
                </div>

            }
            {
                !isLoading && isDailyThought &&
                <div className={`${styles.fadeInBox} ${styles.fadein} ${styles.dailythoughtMediation}`}>
                    <Typography fontSize={"35px"} color={"#FFFFFF"} textAlign={"center"}>
                        IT’S ABOUT A <br />POSITIVE DAY
                    </Typography>
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={300}
                        colors={['#75C59B', '#FFFFFF']}
                        colorsTime={[20, 0]}
                        isSmoothColorTransition
                        trailColor="#F9DD7F"

                    >
                        {({ remainingTime }) => {
                            const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0')
                            const seconds = (remainingTime % 60).toString().padStart(2, '0')

                            return (
                                <div className={styles.countDownWatch}>
                                    {minutes}:{seconds}
                                </div>
                            )
                        }}
                    </CountdownCircleTimer>
                    {/* <CommonButton
                    onClick={onStart}
                    isDisabled={isPlaying}
                    style={{backgroundColor : "#75C59B", marginTop: "16px", fontWeight: "500", color: "#FFFFFF"}}>
                        Let's begin
                    </CommonButton> */}
                </div>

            }
            {
                !isLoading && isRelaxation &&
                <div className={`${styles.fadeInBox} ${styles.fadein} ${styles.relaxationMediation}`}>
                    <Typography fontSize={"35px"} color={"#FFFFFF"} textAlign={"center"}>
                        REST YOUR <br />PRECIOUS MIND <br />AND BODY
                    </Typography>

                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={600}
                        colors={['#F9DD7F', '#FFFFFF']}
                        colorsTime={[20, 0]}
                        isSmoothColorTransition
                        trailColor="#75C59B"

                    >
                        {({ remainingTime }) => {
                            const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0')
                            const seconds = (remainingTime % 60).toString().padStart(2, '0')

                            return (
                                <div className={styles.countDownWatch}>
                                    {minutes}:{seconds}
                                </div>
                            )
                        }}
                    </CountdownCircleTimer>
                    {/* <CommonButton
                    onClick={onStart}
                    isDisabled={isPlaying}
                    style={{backgroundColor : "#F9DD7F", marginTop: "16px", fontWeight: "500"}}>
                        Let's begin
                    </CommonButton> */}
                </div>

            }
            <audio
                src={musicSrc}
                autoPlay
                ref={audioRef}
            />
            <Stack position={"absolute"} right={"20px"} bottom={"20px"}>
                <Link href="/mediation">
                    <ActionButton customStyled={{ width: "fit-content", border: "1px solid #000000" }}>
                        <div className={"buttonAlign"}>
                            <Image
                                width={20}
                                height={16}
                                src={"/left-arrow.png"}
                                alt="left-arrow"
                            />
                            <span>Back</span>
                        </div>
                    </ActionButton>
                </Link>
            </Stack>
        </LayoutViews>
    )
}

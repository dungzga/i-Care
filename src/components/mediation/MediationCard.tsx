"use client"

import { FC, HTMLAttributes } from "react";
import styles from "./MediationCard.module.css";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ActionButton } from "../core/ActionButton";
import Link from "next/link";

interface TMediationCardInterface extends HTMLAttributes<HTMLDivElement> {
    cardText: string,
    cardType: string,
    mediateTime: number,
    href: string,
}

export const MediationCard: FC<TMediationCardInterface> = (props) => {
    const { cardText, cardType, href, mediateTime, ...divProps } = props;

    var cardBackgroundColor: string = "";
    if (cardType == "focus") {
        cardBackgroundColor = "#9747FF"
    } else if (cardType == "dailythought") {
        cardBackgroundColor = "#FFCE2D"
    } else if (cardType == "relaxation") { 
        cardBackgroundColor = "#6CB28E"
    } else {
        cardBackgroundColor = "#FFFFFF";
    }

    return (
        <>
            <Link href={href}>
            <div className={styles.cardWrapper} {...divProps} style={{backgroundColor: cardBackgroundColor}}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} padding={"22px 26px"}>
                    <Stack display={"flex"} flexDirection={"column"}>
                        <Typography fontSize="18px" fontWeight={"300"} color={"#FFFFFF"}>{cardText}</Typography>
                        <Typography fontSize="10px" fontWeight={"300"} color={"#FFFFFF"}>{cardText}・{mediateTime}</Typography>
                    </Stack>
                    <Stack alignSelf={"flex-end"} marginRight={"-12px"}>
                        <Image
                            width={35}
                            height={35}
                            src={"/play-button.png"}
                            alt="playbutton"
                        />
                    </Stack>   
                </Box>
            </div>
            </Link>
        </>
    );
};

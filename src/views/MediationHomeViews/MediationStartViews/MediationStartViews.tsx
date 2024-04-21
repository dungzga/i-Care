"use client"

import { FC } from "react"
import { Box, Link, Stack, Typography, styled } from "@mui/material"
import { LayoutViews } from "../../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton"
import Image from "next/image"
import { MediationCard } from "@/components/mediation/MediationCard"
import styles from "./MediationStartView.module.css";

export const MediationStartViews: FC = () => {

    return (

        <LayoutViews>
            <Typography variant="h6" fontWeight={"700"} sx={{ marginTop: "40px" }}>
                Get ready for your session
            </Typography>
            <Typography variant="subtitle1" fontWeight={"400"}>
                Follow your breath in and out 
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={3} marginTop={"80px"}>
            <div className={styles.blueLoad}></div>
            <div className={styles.yellowLoad}></div>
            <div className={styles.greenLoad}></div>
            </Box>
            
        </LayoutViews>
    )
}

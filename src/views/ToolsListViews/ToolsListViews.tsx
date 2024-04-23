"use client"

import { FC, useEffect, useState } from "react"
import styles from "./ToolsListViews.module.css"
import { Box, Stack, Typography } from "@mui/material"
import { ToolsCard } from "@/components/tools/ToolsCard"
import { LayoutViews } from "../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton"
import Image from "next/image"
import Link from "next/link"
export const ToolsListViews: FC = () => {

    return (
        <LayoutViews>
            <Link href="/">
                <Image
                    width={60}
                    height={30}
                    style={{ height: "100%" }}
                    src={"/good-morning.png"}
                    alt="good morning"
                />
            </Link>
            <Box display={"flex"} flexDirection={"column"} gap={"20px"} marginTop={"20px"}>

                <Typography variant="h6" fontWeight={"700"}>
                    Hi Ga, nice to see you<br /> today !
                </Typography>

                <Typography variant="subtitle1">
                    Let’s start your day with<br /> some activities
                </Typography>

                <Stack flexDirection={"row"} gap={2} flexWrap={"wrap"} marginTop={"20px"} alignSelf={"center"}>
                    <ToolsCard
                        cardText="To do list"
                        styleType="lowerText"
                        buttonColor="purple"
                        imgSrc="/todo-card.png"
                        href="todo"
                    />
                    <ToolsCard
                        cardText="Mediation"
                        styleType="upperText"
                        buttonColor="green"
                        imgSrc="/meditation.png"
                        href="mediation"
                    />

                    <ToolsCard
                        cardText="Daily notes"
                        styleType="lowerText"
                        buttonColor="yellow"
                        imgSrc="/notes.png"
                        href="notes"
                    />
                </Stack>
            </Box>
        </LayoutViews>
    )
}

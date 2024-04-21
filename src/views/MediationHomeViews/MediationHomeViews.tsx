"use client"

import { FC } from "react"
import styles from "./MediationHomeViews.module.css"
import { Box, Link, Stack, Typography } from "@mui/material"
import { LayoutViews } from "../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton"
import Image from "next/image"
import { MediationCard } from "@/components/mediation/MediationCard"
export const MediationHomeViews: FC = () => {

    return (

        <LayoutViews>
            <Typography variant="h6" fontWeight={"700"} sx={{ marginTop: "40px" }}>
                What Brings you
                <br />to Meditation?
            </Typography>
            <Typography variant="subtitle1" fontWeight={"400"}>
                choose a topic to focus on:
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={3} marginTop={"40px"}>
                <MediationCard
                    cardText={"Focus"}
                    mediateTime={5}
                    href="/mediation/start?mediation=focus"
                    cardType="focus"
                />

                <MediationCard
                    cardText={"Daily thought"}
                    mediateTime={5}
                    href="/mediation/start?mediation=dailythought"
                    cardType="dailythought"
                />
                <MediationCard
                    cardText={"Relaxation"}
                    mediateTime={10} 
                    href="/mediation/start?mediation=relaxation"
                    cardType="relaxation"
                />
            </Box>
            <Stack position={"absolute"} right={"20px"} bottom={"20px"}>
                <Link href="/i-care">
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

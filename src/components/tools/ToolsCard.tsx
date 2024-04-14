"use client"

import { FC, HTMLAttributes } from "react";
import styles from "./ToolsCard.module.css";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ActionButton } from "../core/ActionButton";
import Link from "next/link";
interface TToolsCardInterface extends HTMLAttributes<HTMLDivElement> {
    styleType: "lowerText" | "upperText",
    cardText: string,
    buttonColor: "purple" | "green" | "yellow",
    imgSrc: string,
    href: string
}

export const ToolsCard: FC<TToolsCardInterface> = (props) => {
    const { styleType, cardText, buttonColor, imgSrc, href, ...divProps } = props;

    return (
        <>
            {styleType == "lowerText" &&
                <div className={styles.cardWrapper} {...divProps}>
                    <Box display={"flex"} flexDirection={"column"} gap={1} alignItems={"center"}>
                        <Stack alignSelf={"flex-end"} marginRight={"-12px"}>
                            <Image
                                width={92}
                                height={92}
                                src={imgSrc}
                                alt="tool cards"
                            />
                        </Stack>
                        <Stack alignSelf={"flex-start"}>
                            <Typography fontSize="18px" fontWeight={"700"}>{cardText}</Typography>
                        </Stack>
                        <Stack position={"absolute"} right={"12px"} bottom={"16px"}>
                            <Link href={`/${href}`}>
                                <ActionButton
                                    buttonColor={buttonColor}>
                                    START
                                </ActionButton>
                            </Link>
                        </Stack>
                    </Box>
                </div>
            }
            {
                styleType == "upperText" &&
                <div className={styles.cardWrapper} {...divProps}>
                    <Box display={"flex"} flexDirection={"column"} gap={1} alignItems={"center"}>
                        <Stack marginTop={"8px"}>
                            <Typography fontSize="18px" fontWeight={"700"}>{cardText}</Typography>
                        </Stack>
                        <Stack>
                            <Image
                                width={100}
                                height={80}
                                src={imgSrc}
                                alt="tool cards"
                            />
                        </Stack>

                        <Stack position={"absolute"} right={"12px"} bottom={"16px"}>
                            <Link href={`/${href}`}>
                                <ActionButton
                                    buttonColor={buttonColor}>
                                    START
                                </ActionButton>
                            </Link>
                        </Stack>
                    </Box>
                </div>
            }
        </>
    );
};

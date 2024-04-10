"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image";
import styles from "./Homepage.module.css"
import { CommonButton } from "@/components/core/Button";
import { Emoticons } from "@/components/emoticons/Emoticons";
import Link from "next/link";

export const HomepageViews: FC = () => {
    const [emoticonSelected, setEmoticonSelected] = useState<string>("");

    useEffect(() => {
        console.log(emoticonSelected);
    },[emoticonSelected])

    return (
        <>
        <div className={styles.wrapper}>
            <Image
            width={310}
            height={290}
            src={"/good-morning.png"}
            alt="good morning"
            />
            <div className={styles.mainTitle}>
                How are you today ?
            </div>
            <div className={styles.emoticonWrapper}>
                <Emoticons
                emoType="delighted"
                onClick={() => {
                   if(emoticonSelected !== "delighted") setEmoticonSelected("delighted");
                   if(emoticonSelected == "delighted") setEmoticonSelected("");
                }}
                emoticonSelected={emoticonSelected}
                />
                <Emoticons
                emoType="motivated"
                onClick={() => {
                    if(emoticonSelected !== "motivated") setEmoticonSelected("motivated");
                   if(emoticonSelected == "motivated") setEmoticonSelected("");
                }}
                emoticonSelected={emoticonSelected}
                />
                <Emoticons
                emoType="irritated"
                onClick={() => {
                    if(emoticonSelected !== "irritated") setEmoticonSelected("irritated");
                   if(emoticonSelected == "irritated") setEmoticonSelected("");
                }}
                emoticonSelected={emoticonSelected}
                />
            </div>
            <Link href={`/quotes?feeling=${emoticonSelected}`}>
            <CommonButton isDisabled={emoticonSelected == ""}>
                <div className={"buttonAlign"}>
                    <span>Start your day</span>
                    <Image 
                    width={20}
                    height={16}
                    src={"/right-arrow.png"}
                    alt="right-arrow"
                    />
                </div>
            </CommonButton>
            </Link>
        </div>
        </>
    )
}

"use client"

import { FC, useEffect, useState } from "react"
import styles from "./ToDoViews.module.css"
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import { MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material"
import { LayoutViews } from "../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton";
import Image from "next/image";
import Link from "next/link";


export interface TTodoList {
    content: string,
    status: string,
    savedDate: Date,
}

const defaultTodoList: TTodoList[] = [
    {
        content: "",
        status: "done",
        savedDate: new Date()
    },
    {
        content: "",
        status: "inprogress",
        savedDate: new Date()
    },
    {
        content: "",
        status: "todo",
        savedDate: new Date()
    }
]

const BootstrapInput = styled(InputBase)(({ theme }) => {
    return {
        '& .MuiInputBase-input': {
            width: "100%",
            borderRadius: "10px",
            position: 'relative',
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '7px 10px',
            textAlign: "right",
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:focus': {
                borderRadius: "10px",
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }
});


export const ToDoViews: FC = () => {
    const [todoList, setTodoList] = useState<TTodoList[]>(defaultTodoList);

    const addMoreTodoItem = () => {
        const newTodoItem: TTodoList = {
            content: "",
            status: "",
            savedDate: new Date()
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodoItem);
        setTodoList(newTodoList);
        localStorage.setItem("todayTodoList", JSON.stringify(newTodoList))
    }

    const removeTodoItem = (index: number) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
        localStorage.setItem("todayTodoList", JSON.stringify(newTodoList))
    }

    useEffect(() => {
        const checkLocalStorageTodoListData = localStorage.getItem("todayTodoList");
        if (!checkLocalStorageTodoListData) {
            localStorage.setItem("todayTodoList", JSON.stringify(defaultTodoList))
            setTodoList(defaultTodoList);
        } else {
            const todayTodoList: TTodoList[] = JSON.parse(localStorage.getItem("todayTodoList") || "");
            setTodoList(todayTodoList)
        }
    }, [])

    return (
        <LayoutViews>
            <Typography variant="h6" fontWeight={"700"} sx={{ marginTop: "40px" }}>
                Something you have to<br />do today?
            </Typography>
            <div className={styles.gridBox}>
                <div className={styles.todoHeader}>
                    <span>Checklist</span>
                    <span>Status</span>
                </div>
                <div className={styles.text}>
                    {todoList && todoList.length > 0 && todoList.map((todo, index) => {
                        var optionBackgroundColor: string = "";
                        var textColor: string = "";
                        if (todo.status == "done") {
                            optionBackgroundColor = "#FFCE2D"
                            textColor = "#FFFFFF"
                        } else if (todo.status == "inprogress") {
                            optionBackgroundColor = "#9747FF"
                            textColor = "#FFFFFF"
                        } else if (todo.status == "todo") {
                            optionBackgroundColor = "#6CB28E"
                            textColor = "#FFFFFF"
                        } else {
                            optionBackgroundColor = "#FFFFFF";
                            textColor = "#000000"
                        }
                        return (
                            <div className={styles.todoWrapper} key={index}>
                                <div className={styles.text}>
                                    <TextField
                                        sx={{
                                            borderRadius: "10px",
                                            width: "100%",
                                        }}
                                        value={todo.content}
                                        InputProps={{ sx: { borderRadius: "10px", padding: "8px" } }}
                                        size="small"
                                        variant="filled"
                                        multiline
                                        placeholder="Add new task"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const newTodoList = [...todoList];
                                            newTodoList[index].content = e.target.value;
                                            newTodoList[index].savedDate = new Date();
                                            setTodoList(newTodoList);
                                            localStorage.setItem("todayTodoList", JSON.stringify(newTodoList))
                                        }} />
                                        <Typography sx={{marginTop: "-8px"}} fontSize={"10px"} fontWeight={300}>
                                            Edited Date: {todo.savedDate && new Date(todo.savedDate).toLocaleString()}
                                        </Typography>
                                    {index > 2 &&
                                        <Image
                                            width={16}
                                            height={16}
                                            alt="remove button"
                                            src="/remove_button.png"
                                            onClick={() => removeTodoItem(index)}
                                            className={styles.removeButton}
                                        />
                                    }
                                </div>
                                <div className={styles.dropdown}>
                                    <Select
                                        input={<BootstrapInput style={{ backgroundColor: optionBackgroundColor, borderRadius: "10px", color: textColor }} />}
                                        value={todo.status}
                                        onChange={(e: SelectChangeEvent) => {
                                            const newTodoList = [...todoList];
                                            newTodoList[index].status = e.target.value;
                                            newTodoList[index].savedDate = new Date();
                                            setTodoList(newTodoList);
                                            localStorage.setItem("todayTodoList", JSON.stringify(newTodoList))
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"done"}>Done</MenuItem>
                                        <MenuItem value={"inprogress"}>IP</MenuItem>
                                        <MenuItem value={"todo"}>To Do</MenuItem>
                                    </Select>
                                    {index > 2 &&
                                        <div style={{ height: "24px" }}></div>
                                    }
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className={styles.addButton}>
                    <Image
                        width={26}
                        height={26}
                        alt="add button"
                        src="/add_button.png"
                        onClick={addMoreTodoItem}
                    />
                </div>

            </div>
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

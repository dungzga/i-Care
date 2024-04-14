"use client"

import { FC, useState } from "react"
import styles from "./ToDoViews.module.css"
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import { Link, MenuItem, NativeSelect, Select, TextField, Typography } from "@mui/material"
import { LayoutViews } from "../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton";
import Image from "next/image";


export interface TTodoList {
    content: string,
    status: "done" | "inprogress" | "todo" | null
}

const defaultTodoList: TTodoList[] = [
    {
        content: "",
        status: "done"
    },
    {
        content: "",
        status: "inprogress"
    },
    {
        content: "",
        status: "todo"
    },
    {
        content: "",
        status: null
    }
]

const BootstrapInput = styled(InputBase)(({ theme }) => 
    ({
    '& .MuiInputBase-input': {
    width: "50px",
      borderRadius: "10px",
      position: 'relative',
      backgroundColor: "#FFFFFF",
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
  }));


export const ToDoViews: FC = () => {
    const [todoList, setTodoList] = useState<TTodoList[]>(defaultTodoList);
    return (
        <LayoutViews>
            <Link href="/i-care">
                <Image
                    width={60}
                    height={30}
                    style={{ height: "100%" }}
                    src={"/good-morning.png"}
                    alt="good morning"
                />
            </Link>
            <Typography variant="h6" fontWeight={"700"} sx={{marginTop: "40px"}}>
                Something you have to<br/>do today?
            </Typography>
            <div className={styles.gridBox}>
                <div className={styles.todoHeader}>
                    <span>Checklist</span>
                    <span>Status</span>
                </div>
                
                <div className={styles.text}>
                    {todoList.map((todo, index) => {
                        return (
                        <TextField
                        sx={{
                            borderRadius: "10px",
                            width: "95%"
                        }}
                        key={index}
                        value={todo.content}
                        InputProps={{ sx: { borderRadius: "10px", padding: "8px" } }}
                        size="small"
                        variant="filled"
                        multiline
                        placeholder="Add new task" />
                        )
                    })}
                    
                </div>
                <div className={styles.dropdown}>
                    {todoList.map((todo, index) => {
                        return (
                    <Select
                    key={index}
                    input={<BootstrapInput />}
                    value={todo.status}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"done"}>Done</MenuItem>
                    <MenuItem value={"inprogress"}>IP</MenuItem>
                    <MenuItem value={"todo"}>To Do</MenuItem>
                    </Select>
                        )
                    })}
                    
                </div>

            </div>
        </LayoutViews>
    )
}

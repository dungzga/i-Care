"use client"

import { FC, useEffect, useState } from "react"
import styles from "./ToDoViews.module.css"
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import { Link, MenuItem, NativeSelect, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { LayoutViews } from "../LayoutViews/LayoutViews"
import { ActionButton } from "@/components/core/ActionButton";
import Image from "next/image";


export interface TTodoList {
    content: string,
    status: string
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
    }
]

const BootstrapInput = styled(InputBase)(({ theme }) => 
    {
        return {
        '& .MuiInputBase-input': {
        width: "60px",
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
            status: ""
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodoItem);
        setTodoList(newTodoList);
    }

    const removeTodoItem = (index: number) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    useEffect(() => {
        console.log(todoList)
    },[todoList])
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
                        <>
                        
                        <TextField
                        sx={{
                            borderRadius: "10px",
                            width: "100%",
                        }}
                        key={index}
                        value={todo.content}
                        InputProps={{ sx: { borderRadius: "10px", padding: "8px" } }}
                        size="small"
                        variant="filled"
                        multiline
                        placeholder="Add new task" />
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
                        </>
                        )
                    })}
                    
                </div>
                <div className={styles.dropdown}>
                    {todoList.map((todo, index) => {
                    var optionBackgroundColor: string = "";
                    if(todo.status == "done"){
                        optionBackgroundColor = "#FFCE2D"
                    } else if(todo.status == "inprogress"){
                        optionBackgroundColor = "#9747FF"
                    } else if(todo.status == "todo"){
                        optionBackgroundColor = "#6CB28E"
                    } else {
                        optionBackgroundColor = "#FFFFFF"
                    }
                    return (
                    <Select
                    key={index}
                    input={<BootstrapInput style={{backgroundColor: optionBackgroundColor, borderRadius: "10px"}}/>}
                    value={todo.status}
                    onChange={(e: SelectChangeEvent) => {
                        const newTodoList = [...todoList];
                        newTodoList[index].status = e.target.value;
                        setTodoList(newTodoList);
                    }}
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
        </LayoutViews>
    )
}

import React from "react";
import { Container } from "@mui/material";
import AddForm from "./AddForm";
import { LogEntry, SceneSetting } from "../types/interfaces";

const balls: LogEntry = {
    id: 12,
    strain: '',
    grams: NaN,
    date: new Date(),
    logged: false,
    userId: 0,
}

const strains: Array<string> = [
    'Strawguana',
    'Og Kush',
    'Diesel'
]





function AddEntry (props: {logEntries: LogEntry[], user: User, scene: SceneSetting}) {
    return  <AddForm logEntry={balls} strainList={strains}/>
        
}

export default AddEntry
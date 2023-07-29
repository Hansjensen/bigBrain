import React from "react";
import { Container } from "@mui/material";
import AddForm from "./AddForm";


const balls: LogEntry = {
    id: 12,
    strain: 'Diesel',
    grams: 2000,
    date: Date,
    logged: false,
    userId: 0,
}

const strains: Array<string> = [
    'Strawguana',
    'Og Kush',
    'Diesel'
]





function AddEntry () {
    return  <AddForm logEntry={balls} strainList={strains}/>
        
}

export default AddEntry
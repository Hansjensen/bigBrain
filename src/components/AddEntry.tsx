import React from "react";
import { Container } from "@mui/material";


export interface LogEntry {
    id: number;
    strain: string;
    grams: number;
    date: Date;
    logged: boolean;
    userId: number;
} 

function AddEntry () {
    return (
        <Container>
            
        </Container>
    )
}

export default AddEntry
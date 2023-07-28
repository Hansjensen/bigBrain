import React from "react";
import { LogEntry } from "../App";
import '../styles/Entries.css'
import { Typography, Button } from "@mui/material";

function Entries (props: {logEntries: LogEntry[]}) {
    const {logEntries} = props
    return(
        <div id="entriesContainer">
            {logEntries.map(entry => {
                console.log(entry.date)
                return <EntryItem logEntry={entry} key={entry.id}/>
                
            })}
        </div>
    )
}



function EntryItem (props: {logEntry: LogEntry}) {
    const {logEntry} = props
    return( 
     <div className="logEntryContainer" >
        <div className="dateOutline">
            <h2 className="dateItem">{logEntry.date.getMonth() + '/' +logEntry.date.getDate()}</h2>
        </div>
        <h2 className="strainTitle">{logEntry.strain}</h2>
        <Typography >{logEntry.grams + "g"}</Typography>
        <Button>Edit</Button>
        





     </div>
    )

}

export default Entries 
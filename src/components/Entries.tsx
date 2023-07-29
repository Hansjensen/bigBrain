import React from "react";
import { LogEntry } from "../types/interfaces";
import '../styles/Entries.css'
import { Button, Typography } from "@mui/material";

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
            <Typography 
                noWrap 
                className="strainTitle">{logEntry.strain}</Typography>
        
            <h4
            className="gramsType" >
                {logEntry.grams + "g"}
            </h4>

        <div className="editButtDiv">
        
        {!logEntry.logged &&
            <Button variant="contained" color="secondary" size="small">Edit</Button> 
        }
        </div>





     </div>
    )

}

export default Entries 
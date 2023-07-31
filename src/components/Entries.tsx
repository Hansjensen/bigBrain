import { LogEntry } from "../types/interfaces";
import '../styles/Entries.css'
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { LogContext } from "./LogContext";

function Entries () {
    const logEntries = useContext(LogContext)
    return(
        <div id="entriesContainer">
            {logEntries.map((entry: LogEntry) => {
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
                <h2 className="dateItem">{logEntry.date.get('month') + '/' +logEntry.date.get('date')}</h2>
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
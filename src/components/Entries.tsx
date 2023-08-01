import { LogEntry, SceneSetting, User } from "../types/interfaces";
import '../styles/Entries.css'
import { Button, Typography } from "@mui/material";
import { SetStateAction, useContext, useState, Dispatch } from "react";
import { LogContext } from "./LogContext";
import AddForm from "./AddForm";
import dayjs from "dayjs";

function Entries (props: {strains: Array<string>, scene: SceneSetting, user: User}) {
    const logEntries = useContext(LogContext)
    const {strains, scene, user} = props
    const [currentLog, setCurrentLog] = useState<LogEntry>({
                                                            
        id: "",
        strain: "",
        grams:  0,
        date: dayjs(),
        logged: false,
        userId: "",
        scene: "",

        })
        console.log(logEntries)
    const [editBool, setEditBool] = useState(false)
    return(
        <div id="entriesContainer">
            {!editBool ? logEntries.map((entry: LogEntry) => {
                return <EntryItem logEntry={entry} key={entry.id} setEditBool={setEditBool} setCurrentLog={setCurrentLog}/>
                }):
                <AddForm logEntry={currentLog} strainList={strains} edit={true} scene={scene} user={user} setEditBool={setEditBool}></AddForm>
            
            }
        </div>
    )
}



function EntryItem (props: {logEntry: LogEntry, setCurrentLog: Dispatch<SetStateAction<LogEntry>>, setEditBool: Dispatch<SetStateAction<boolean>>}) {
    const {logEntry, setEditBool, setCurrentLog} = props
    const [thisEntry, setThisEntry] = useState<LogEntry>(logEntry)
  
        
    const handleEditButtonClick = (e) => {
        
        setCurrentLog(() => thisEntry)
        setEditBool(true)
        
    }

    return( 
     <div className="logEntryContainer" >
        
            <div className="dateOutline">
                <h2 className="dateItem">{(logEntry.date.get('month') + 1) + '/' +logEntry.date.get('date')}</h2>
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
            <Button variant="contained" color="secondary" size="small"  id={logEntry.id} onClick={handleEditButtonClick}>Edit</Button> 
        }
        </div>





     </div>
    )

}

export default Entries 
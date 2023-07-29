import React from "react";
import {User, LogEntry, Admin, SceneSetting} from '../types/interfaces.ts'
import { FormControl, InputLabel, Select, MenuItem, Typography, Button } from "@mui/material";
import '../styles/User.css'
import { useState , useEffect} from 'react';
import { userTotalGramsHandler, userTotalOwedHandler } from "../logic/dataHandlers.tsx";




function UserPage (props: {user: User, scene: SceneSetting, logEntries: LogEntry[]}) {

    const{user, logEntries, scene} = props;

    const[sceneValue, setSceneValue] = useState(scene.currentScene)
    const[totalGrams, setTotalGrams] = useState(1934)
    const[total, setTotal] = useState(1032)
   

    
    useEffect(() => {
        
        setTotalGrams(userTotalGramsHandler(logEntries, sceneValue))
        setTotal(() => userTotalOwedHandler(totalGrams, scene.pricePerPound, scene.wetDry))

      }, [sceneValue, logEntries, totalGrams, scene.pricePerPound, scene.wetDry]);


    const handleSceneChange = (e) => {
        setSceneValue(e.target.value)
    }

    return (
        <div id="userPageContainer">
            <FormControl 
                    fullWidth
                    sx={{my: 5}}
                  >
                    <InputLabel 
                        id="userSceneSelectLabel"
                        >
                            Scene
                    </InputLabel>
                    <Select
                        labelId="sceneSelectLabel"
                        id="userSceneSelect"
                        value={sceneValue}
                        label="Strain"
                        onChange={handleSceneChange}

                    >       {user.sceneList.map(scene => {
                        return <MenuItem value={scene} key={Math.random()}>{scene}</MenuItem>
                    })}  
                    </Select>
                    </FormControl>
                    <Typography
                        variant="h4"
                         sx={{my: 5}}>Total Grams: {totalGrams} g</Typography>
                    <Typography 
                        variant="h4"
                        sx={{my: 5}}>Total Owed: ${total}</Typography>
                    <Button 
                        variant="contained"
                        sx={{my: 5}}>Logout</Button>
        </div>

    )
  }
export default UserPage
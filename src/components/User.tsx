import  { useContext } from "react";
import {User,  SceneSetting} from '../types/interfaces.ts'
import { FormControl, InputLabel, Select, MenuItem, Typography, Button } from "@mui/material";
import '../styles/User.css'
import { useState , useEffect} from 'react';
import { userTotalGramsHandler, userTotalOwedHandler } from '../logic/dataHandlers.tsx'
import { LogContext } from "./LogContext.tsx";
import { useAuth } from "./AuthContext.tsx";
import app from "../firebase.ts";
import { useNavigate } from "react-router";



function UserPage (props: {user: User, scene: SceneSetting}) {

    const{user, scene} = props;
    const logEntries = useContext(LogContext)
    const[sceneValue, setSceneValue] = useState(scene.currentScene)
    const[totalGrams, setTotalGrams] = useState(1934)
    const[total, setTotal] = useState(1032)
    const {logout} = useAuth(app)
    const [error, setError] = useState("")
    const navigate = useNavigate()
   

    useEffect(() => {
        
        setTotalGrams(userTotalGramsHandler(logEntries, sceneValue))
        setTotal(() => userTotalOwedHandler(totalGrams, scene.pricePerPound, scene.wetDry))

      }, [sceneValue, logEntries, totalGrams, scene.pricePerPound, scene.wetDry]);


    const handleSceneChange = (e: any) => {
        setSceneValue(e.target.value)
    }

    async function handleLogoutClick() {
        setError("")
        try {
            await logout()
            navigate('/')
        } catch {
            setError("Failed to Logout")
        }
        
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
                        sx={{my: 5}}>Total: ${total}</Typography>
                    <Button 
                        onClick={handleLogoutClick}
                        color="secondary"
                        variant="contained"
                        sx={{my: 5}}>Logout</Button>
        </div>

    )
  }
export default UserPage
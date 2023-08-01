
import { Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, } from '@mui/material'
import { LogEntry, SceneSetting, User } from '../types/interfaces'
import { useState, useContext } from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LogDispatchContext } from './LogContext';

import '../styles/AddEntry.css'

function AddForm(props:  {logEntry: LogEntry, strainList: Array<string>, edit: boolean, user: User, scene: SceneSetting}) {
    const { strainList, user, scene, edit} = props
    
    const [log, setLog] = useState(props.logEntry)
    
    const { strain, grams, date } = log

    const dispatch = useContext(LogDispatchContext)

    const handleStrainChange = (e: any) => {
        setLog({...log , strain: e.target.value})
       
    }

    const handleGramsChange = (e: any) => {
        setLog({...log, grams: parseInt(e.target.value)})
       
    }

    const handleDateChange = (e: any) => {
        setLog({...log, date: e.target.value})
    }

    const handleSubmitClick = (e: any) => {
        e.preventDefault()
        if(edit) {
            dispatch({  
                type: 'edit_logEntry',
                strain: strain,
                grams: grams,
                date: date,
                
         })
        } else {
        dispatch({  
                    type: 'add_logEntry',
                    strain: strain,
                    grams: grams,
                    date: date,
                    userId: user.id,
                    scene: scene.currentScene,
        })}
    }
    return ( 
        <form className="logEntryForm">
                <FormControl 
                    fullWidth
                    sx={{my: 4}}>
                    <InputLabel 
                        id="strainSelectLabel"
                        >
                            Strain
                    </InputLabel>
                    <Select
                        labelId="strainSelectLabel"
                        id="strainSelect"
                        value={strain}
                        label="Strain"
                        onChange={handleStrainChange}

                    >       {strainList.map(straini => {
                        return <MenuItem value={straini} key={straini}>{straini}</MenuItem>
                    })}  
                    </Select>
                    </FormControl>
                    <FormControl fullWidth 
                        sx={{my: 4}}>
                    <InputLabel htmlFor="gramsInput">Grams</InputLabel>
                    <OutlinedInput
                        
                        fullWidth
                        value={grams > 0 ? grams: ''}
                        label="Grams"
                        type="number"
                        id="gramsInput"
                        onChange={handleGramsChange}
                        endAdornment={<InputAdornment position="end">g</InputAdornment>}
                        
                    />
                    </FormControl>
                    <MobileDatePicker 
                        label="Date"
                        value={date}
                        onChange={handleDateChange}
                        sx={{my: 4}}/>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={handleSubmitClick}
                        sx={{mt: 4, height:60}}>{edit?"Edit":"Submit"}</Button>
                    

            </form>
            
   
    )


}


export default AddForm
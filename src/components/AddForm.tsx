
import { Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, } from '@mui/material'
import { LogEntry, SceneSetting, User } from '../types/interfaces'
import { useState, useContext } from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { LogDispatchContext } from './LogContext';

import '../styles/AddEntry.css'

function AddForm(props: {logEntry: LogEntry, strainList: Array<string>, user: User, scene: SceneSetting}) {
    const {logEntry, strainList, user, scene} = props
    
    
    const [strain, setStrain] = useState(logEntry.strain)
    const [grams, setGrams] = useState<number>(logEntry.grams)
    const [date, setDate] = useState(dayjs(logEntry.date))

    const dispatch = useContext(LogDispatchContext)

    const handleStrainChange = (e: any) => {
        setStrain(e.target.value)
       
    }

    const handleGramsChange = (e: any) => {
        setGrams(parseInt(e.target.value))
       
    }

    const handleDateChange = (e: any) => {
        setDate(e)
    }

    const handleSubmitClick = (e: any) => {
        e.preventDefault()
        dispatch({  
                    type: 'add_logEntry',
                    strain: strain,
                    grams: grams,
                    date: date,
                    userId: user.id,
                    scene: scene.currentScene,
        })
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

                    >       {strainList.map(strain => {
                        return <MenuItem value={strain} key={Math.random()}>{strain}</MenuItem>
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
                        aria-describedby="grams input"
                        inputProps={{
                            'aria-label': 'weight',
                    }}
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
                        sx={{mt: 4, height:60}}>Submit</Button>
                    

            </form>
            
   
    )


}


export default AddForm
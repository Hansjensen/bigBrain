import React from 'react'
import { Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, } from '@mui/material'
import { LogEntry } from '../types/interfaces'
import { useState } from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

import '../styles/AddEntry.css'

function AddForm(props: {logEntry: LogEntry, strainList: Array<string>}) {
    const {logEntry, strainList} = props
    
    
    const [strain, setStrain] = useState(logEntry.strain)
    const [grams, setGrams] = useState(logEntry.grams)
    const [date, setDate] = useState(dayjs(logEntry.date))

    const handleStrainChange = (e) => {
        setStrain(e.target.value)
    }

    const handleGramsChange = (e) => {
        setGrams(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e)
        
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
                        sx={{mt: 4, height:60}}>Submit</Button>
                    

            </form>
            
   
    )


}


export default AddForm
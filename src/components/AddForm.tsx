import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, } from '@mui/material'
import { LogEntry } from '../types/interfaces'
import { useState } from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import '../styles/AddEntry.css'

function AddForm(props: {logEntry: LogEntry, strainList: Array<string>}) {
    const {logEntry, strainList} = props
    
    
    const [strain, setStrain] = useState(logEntry.strain)
    const [grams, setGrams] = useState(logEntry.grams)

    const handleStrainChange = (e) => {
        setStrain(e.target.value)
    }

    const handleGramsChange = (e) => {
        setGrams(e.target.value)
    }

    return ( 
        <form className="logEntryForm">
                <FormControl 
                    fullWidth
                    sx={{my: 2}}>
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
                        return <MenuItem value={strain}>{strain}</MenuItem>
                    })}  
                    </Select>
                    </FormControl>
                    <FormControl fullWidth 
                        sx={{my: 2}}>
                    <InputLabel htmlFor="gramsInput">Grams</InputLabel>
                    <OutlinedInput
                        
                        fullWidth
                        value={grams > 0 && grams}
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
                        sx={{my: 2}}/>
                    

            </form>
            
   
    )


}


export default AddForm
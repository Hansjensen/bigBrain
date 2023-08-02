
import { Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, FormHelperText, } from '@mui/material'
import { LogEntry, SceneSetting, User } from '../types/interfaces'
import { useState, useContext, Dispatch, SetStateAction } from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LogDispatchContext } from './LogContext';
import '../styles/AddForm.css'

import '../styles/AddEntry.css'
import { useNavigate } from 'react-router';


function AddForm(props:  {logEntry: LogEntry, strainList: Array<string>, edit: boolean, user: User, scene: SceneSetting, setEditBool: Dispatch<SetStateAction<boolean>> | any}) {
    const { logEntry, strainList, user, scene, edit, setEditBool} = props
   
   const [strain, setStrain] = useState(logEntry.strain)
   const [grams, setGrams] = useState(logEntry.grams)
   const [date, setDate] = useState(logEntry.date)
   const [strainError, setStrainError ] = useState(false)
   const [gramsError, setGramsError] = useState(false) 
    
    const navigate = useNavigate()
    const dispatch = useContext(LogDispatchContext)

    const handleStrainChange = (e: any) => {
        setStrain( e.target.value)
       
    }

    const handleGramsChange = (e: any) => {
        setGrams(parseInt(e.target.value))
        
       
    }

    const handleDateChange = (e: any) => {
        setDate(e.target.value)
    }

    const handleSubmitClick = (e: any) => {
        e.preventDefault()
        setStrainError(()=>false)
        setGramsError(()=>false)
       
        if(strain == "") {
            setStrainError(()=>true)
        }

        if (grams == ""){
            setGramsError(()=>true)
        }


        
        if (strain&&grams)

                if(edit) {
                    dispatch({  
                        type: 'edit_logEntry',
                        strain: strain,
                        grams: grams,
                        date: date,
                        id: logEntry.id
                        
                })
                setEditBool(false)
                } else {
                dispatch({  
                            type: 'add_logEntry',
                            strain: strain,
                            grams: grams,
                            date: date,
                            userId: user.id,
                            scene: scene.currentScene,
                })
                navigate('/entries')
    }

    }

    const handleDeleteClick = () => {
        dispatch({  
            type: 'delete_logEntry',
            id: logEntry.id
            
     })
     setEditBool(false)

    }


    return ( 
        <form className="logEntryForm">
                <FormControl 
                    required
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
                        error={strainError}
                        

                    >       {strainList.map(straini => {
                        return <MenuItem value={straini} key={straini}>{straini}</MenuItem>
                    })}  
                    </Select>
                    {strainError && <p className="validError">Select a Strain!</p>}
                    </FormControl>
                
                    <FormControl 
                        required
                        fullWidth 
                        sx={{my: 4}}
                        
                        >
                           
                    <InputLabel htmlFor="gramsInput">Grams</InputLabel>
                    <OutlinedInput
                        fullWidth
                        value={grams ? grams: ''}
                        label="Grams"
                        type="number"
                        id="gramsInput"
                        onChange={handleGramsChange}
                        endAdornment={<InputAdornment position="end">g</InputAdornment>}
                        error={gramsError}
                        

                       
                        
                    />
                    {gramsError && <p className="validError">Enter Number of Grams!</p>}
                    </FormControl>
                    <MobileDatePicker 
                        
                        label="Date"
                        value={date}
                        onChange={handleDateChange}
                        sx={{my: 4}}
                        />
                        
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={handleSubmitClick}
                        sx={{mt: 4, height:60}}>{edit?"Edit":"Submit"}</Button>
                    {edit && 
                    
                    <Button 
                    variant="contained" 
                    color="primary"
                    onClick={handleDeleteClick}
                    sx={{mt: 6, height:40}}>Delete</Button>}
                    

            </form>
            
   
    )


}


export default AddForm
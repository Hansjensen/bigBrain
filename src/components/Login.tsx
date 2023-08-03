
import { InputLabel, OutlinedInput, FormControl, InputAdornment, IconButton, Button, } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useState, useRef } from 'react'
import '../styles/Login.css'
import { useAuth } from './AuthContext'
import app from '../firebase'
import { useNavigate } from 'react-router'



function Login () { 
    const emailRef = useRef()
    const passwordRef= useRef()
    const {login} = useAuth()
    const [error, setError] = useState('  ')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setShowPassword((prevState: any) => !prevState)
    }

    async function handleSubmitClick (e) {
        e.preventDefault()
        
        
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed To LogIn')
            console.log('error')
        }
        setLoading(false)
        navigate('/user')
    }



    return (
        <form className="loginForm">
                <FormControl sx={{ m: 1, my: 5, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        fullWidth
                        inputRef={emailRef}
                        label="Email"
                        type="email"
                        id="email"
                     />
                    </FormControl>

                 <FormControl sx={{ m: 1,  my: 5, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    inputRef={passwordRef}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
            
                     label="Password"
                    />
                    {error && <p className="validError">{error}</p>}
                    </FormControl>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={(handleSubmitClick)}>Login</Button>
                        
            </form>

                       
                
    )

}



export default Login
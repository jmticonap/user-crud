import React, {useState} from 'react';
import './css/UsersForm.css'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import IconClose from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment
} from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import CalendarIcon from '@mui/icons-material/CalendarToday'
import { ThemeProvider } from '@mui/material/styles'
import buttonsTheme from './css/buttonsTheme.js'



const UsersForm = ({showHandler}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [values, setValues] = React.useState({
        first_name: '',
        last_name:'',
        email:'',
        password: '',
        birthday: ''
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='form-container'>
            <ThemeProvider theme={buttonsTheme}>
            
                <Card sx={{
                    width:'25rem',
                    padding: '1rem'}}>
                    <CardHeader
                        title='New User' 
                        action={
                            <IconButton 
                                onClick={()=>showHandler(false)}> 
                                <IconClose /> 
                            </IconButton>
                        }
                    >

                    </CardHeader>
                    <CardContent
                        component='form'
                        sx={{ display: 'flex', flexFlow: 'column nowrap', gap: '1rem' }}>
                        <TextField
                            required
                            label='Name'
                            id='first_name'
                            type='text' />
                        <TextField
                            required
                            label='Last name'
                            id='last_name'
                            type='text' />
                        <TextField
                            required
                            autoComplete='off'
                            label='Email'
                            id='email'
                            type='email' />
                        <FormControl variant="outlined">
                            <InputLabel 
                                sx={{backgroundColor: '#FFF', padding:'0 0.4rem'}}
                                htmlFor='password'>Password *</InputLabel>
                            <OutlinedInput
                                required
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position='end' >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge='end'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            >

                            </OutlinedInput>
                        </FormControl>
                        {/* <TextField
                            required
                            id='birthday'
                            type='date'
                            defaultValue='2022-09-15' /> */}
                        <FormControl variant="outlined">
                            <InputLabel 
                                sx={{backgroundColor: '#FFF', padding:'0 0.4rem'}}
                                htmlFor='password'>Birthday *</InputLabel>
                            <OutlinedInput
                                required
                                id='birthday'
                                type='date'
                                endAdornment={
                                    <InputAdornment position='end' >
                                        <CalendarIcon />
                                    </InputAdornment>
                                }
                            >

                            </OutlinedInput>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button 
                            color='blue' 
                            variant='contained'
                            sx={{width: '100%'}}>Add new user</Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </div>
    );
};

export default UsersForm


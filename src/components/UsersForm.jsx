import React, { useState, useEffect } from 'react';
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



const UsersForm = ({ showHandler, selectedUser, saveHandler }) => {
    const [isEditting, setIsEditting] = useState(false)
    const [showPassword, setShowPassword] = useState(false) 
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    });

    const changeFistName = (prop, evt) => {
        console.log(evt.target.value)
        setValues({...values, [prop]: evt.target.value})
    }
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    const closeForm = evt => {
        if(evt.target.id === 'form_container') showHandler(false)
    }

    const save = () => {
        if(isEditting){
            // saveHandler({
            //     id: 0,
            //     user:values
            // })
            showHandler(false)
        }else{
            console.log(values)
            saveHandler(values)
            showHandler(false)

            
        }
    }

    useEffect(()=>{        
        if(selectedUser)
        {
            setValues({
                first_name: selectedUser['first_name'],
                last_name: selectedUser['last_name'],
                email: selectedUser['email'],
                password: selectedUser['password'],
                birthday: selectedUser['birthday']
            })  
            setIsEditting(true)   
        }else{
            setValues({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                birthday: ''
            }) 
            setIsEditting(false)
        }
    },[selectedUser])

    return (
        <div id='form_container' className='form-container' onClick={closeForm}>

            <Card sx={{
                width: '25rem',
                padding: '1rem'
            }}>
                <CardHeader
                    title={isEditting ? 'Editting User' : 'New User'}
                    action={
                        <IconButton
                            onClick={() => showHandler(false)}>
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
                        type='text'
                        onChange={evt=>changeFistName('first_name',evt)}
                        value={values.first_name} />
                    <TextField
                        required
                        label='Last name'
                        id='last_name'
                        type='text'
                        onChange={evt=>changeFistName('last_name',evt)}
                        value={values.last_name} />
                    <TextField
                        required
                        autoComplete='off'
                        label='Email'
                        id='email'
                        type='email'
                        onChange={evt=>changeFistName('email',evt)}
                        value={values.email} />
                    <FormControl variant="outlined">
                        <InputLabel
                            sx={{ backgroundColor: '#FFF', padding: '0 0.4rem' }}
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

                    <FormControl variant="outlined">
                        <InputLabel
                            sx={{ backgroundColor: '#FFF', padding: '0 0.4rem' }}
                            htmlFor='password'>Birthday *</InputLabel>
                        <OutlinedInput
                            required
                            id='birthday'
                            type='date'
                            onChange={evt=>changeFistName('birthday',evt)}
                            value={values.birthday}
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
                        sx={{ width: '100%' }}
                        onClick={save}
                    >
                            {isEditting ? 'Save changes' : 'Add new user'}
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default UsersForm


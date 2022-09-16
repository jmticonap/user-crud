import React from 'react'
import './css/JHeader.css'

import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'


const JHeader = ({ showHandler, selectedUserHandler }) => {

    const showHandlerForm = ()=>{
        selectedUserHandler(null)
        showHandler(true)
    }

    return (
        <header className='header-app'>
            <h1 className='header-app__title'>Users List</h1>
            <Button
                variant='contained'
                color='blue'
                onClick={showHandlerForm}>
                <AddIcon /> Create new user
            </Button>
        </header>
    );
};

export default JHeader;
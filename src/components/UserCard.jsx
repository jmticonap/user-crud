import React from 'react';
import './css/UserCard.css'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import RedeemIcon from '@mui/icons-material/Redeem'

const UserCard = ({ user, selectedUserHandler, showHandler, deleteHandler }) => {

    const setSelectedUserHandler = () => {
        selectedUserHandler(user)
        showHandler(true)
    }

    return (
        <div className='user-card__container'>
            <h2>{user['first_name']+' '+user['last_name']}</h2>
            <ul>
                <li>
                    <h4>EMAIL</h4>
                    <p>{user['email']}</p>
                </li>
                <li>
                    <h4>BIRTHDAY</h4>
                    <p><RedeemIcon /> {user['birthday']}</p>
                </li>
            </ul>
            <div className='user-card__actions'>
                <Button 
                    onClick={()=>deleteHandler(user['id'])}
                    variant='contained' 
                    color='jred'>
                    <DeleteIcon />
                </Button>
                <Button
                    variant='contained' 
                    color='jwhite' 
                    onClick={setSelectedUserHandler}>
                    <EditIcon />
                </Button>
            </div>
        </div>
    );
};

export default UserCard;
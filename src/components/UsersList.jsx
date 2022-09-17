import React from 'react';
import './css/UsersList.css'
import UserCard from './UserCard';

const UsersList = ({ selectedUserHandler, showHandler, users, deleteHandler }) => {

    const renderList = () => {
        if(users.length>0){
            return (users?.map(user => (
                <UserCard
                    key={user.id}
                    user={user}
                    selectedUserHandler={selectedUserHandler}
                    showHandler={showHandler}
                    deleteHandler={deleteHandler} />
            )))
        }else{
            return <h2 style={{color: 'black'}}>No users to show!</h2>
        }
    }
    
    return (
        <div className='users-list'>
            {
                renderList()
            }
        </div>
    );
};

export default UsersList;
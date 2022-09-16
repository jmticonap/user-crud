import React from 'react';
import './css/UsersList.css'
import UserCard from './UserCard';

const UsersList = ({ selectedUserHandler, showHandler }) => {
    return (
        <div className='users-list'>
            <UserCard
                user={{
                    first_name: "Juan Manuel",
                    last_name: "Ticona Pacheco",
                    email: "jm.ticona.p@gmail.com",
                    password: "qwer",
                    birthday: "2022-09-15"
                }}
                selectedUserHandler={selectedUserHandler}
                showHandler={showHandler} />
            <UserCard
                user={{
                    first_name: "Donovan Ian",
                    last_name: "Ticona Verdeguer",
                    email: "jm.ticona.p@gmail.com",
                    password: "qwer",
                    birthday: "2014-09-16"
                }}
                selectedUserHandler={selectedUserHandler}
                showHandler={showHandler} />
            <UserCard
                user={{
                    first_name: "Mia Mauren",
                    last_name: "Ticona Verguer",
                    email: "jm.ticona.p@gmail.com",
                    password: "qwer",
                    birthday: "2022-09-26"
                }}
                selectedUserHandler={selectedUserHandler}
                showHandler={showHandler} />
            <UserCard
                user={{
                    first_name: "Ada Haydee",
                    last_name: "Pacheco Ismodes",
                    email: "ada.pacheco@gmail.com",
                    password: "qwer",
                    birthday: "1948-04-06"
                }}
                selectedUserHandler={selectedUserHandler}
                showHandler={showHandler} />
        </div>
    );
};

export default UsersList;
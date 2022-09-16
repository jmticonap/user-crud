import { useState } from 'react'
import './App.css'
import useUserDB from './hooks/useUserDB'

import JHeader from './components/JHeader'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

import buttonsTheme from './components/css/buttonsTheme'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {
    const [showForm, setShowForm] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const {
        data: userList, 
        setNewUser, 
        saveUser} = useUserDB()

    return (
        <ThemeProvider theme={createTheme(buttonsTheme)} >
            <div className="App">
                <JHeader 
                    showHandler={setShowForm} 
                    selectedUserHandler={setSelectedUser} />
                {
                    showForm && <UsersForm
                        showHandler={setShowForm} 
                        selectedUser={selectedUser}
                        saveHandler={saveUser} />
                }
                <UsersList
                    users={userList} 
                    selectedUserHandler={setSelectedUser}
                    showHandler={setShowForm}  />
            </div>
        </ThemeProvider>
    )
}

export default App

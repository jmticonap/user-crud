import { useState } from 'react'
import './App.css'

import UsersForm from './components/UsersForm'

function App() {
  const [showForm, setShowForm] = useState(true)

  return (
    <div className="App">
      {showForm && <UsersForm showHandler={setShowForm} />}
      
    </div>
  )
}

export default App

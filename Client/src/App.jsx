import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import UserDashboard from './Pages/Dashboard/UserDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<UserDashboard/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App

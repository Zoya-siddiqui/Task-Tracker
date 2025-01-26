import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import UserDashboard from './Pages/Dashboard/UserDashboard'
import ShrinkNav from './Components/Animatedpages/ShrinkNav'
import HomeZoominimage from './Components/Animatedpages/HomeZoominimage'
import AnimationZoomScroll from './Components/Animatedpages/AnimationZoomScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<UserDashboard/>}/>
      <Route path="/shrink-nav" element={<ShrinkNav/>}/>
      <Route path="/zoom-animation" element={<HomeZoominimage/>}/>
      <Route path='/zoom-hero-animation' element={<AnimationZoomScroll/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App

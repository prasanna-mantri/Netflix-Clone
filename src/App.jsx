import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App(){
  return(<div>
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Home/>} /> 
      <Route path='/login' element={<Login/>} /> 
      <Route path='/player/:id' element = {<Player/>}/>
    </Routes>
    </BrowserRouter>


   
   
  </div>)

}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout/layout'
import { Button } from 'antd'
function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/' element = {<Layout/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

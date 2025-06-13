import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './home'
import About from './About'
import Contact from './Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Contact from './Contact/Contact'
import Blog from './Blog/Blog'
import About from './AboutUS/About'

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/About" element={<About/>}/>



    </Routes>
      
    </>
  )
}

export default App

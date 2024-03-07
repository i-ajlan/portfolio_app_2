
import {Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Welcome from "./Welcome"
import About_me from "./About_me"
import My_projects from "./My_projects"


function App() {


  return ( 
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<Welcome/>}/> 
          <Route path='about_me' element={<About_me/>}/> 
          <Route path='my_projects' element={<My_projects/>}/> 
        </Route>
      </Routes>
   
  )
}

export default App

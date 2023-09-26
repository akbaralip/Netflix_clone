import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"
import {action, originals, romance, horror, comedy} from './urls'
function App() {
  

  return (
    <>
     <NavBar/>
     <Banner/>
     <RowPost title='Netflix Originals' url={originals} />
     <RowPost title='Action' isSmall url={action} />
     <RowPost title='Romance'  url={romance} />
     <RowPost title='Horror Movies' isSmall url={horror} />
     <RowPost title='Comedy Movies'  url={comedy} />


    </>
  )
}

export default App

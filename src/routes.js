import React from "react"
import { Routes, Route, BrowserRouter} from 'react-router-dom'

import Repositories from "./pages/Repositories/Index"
import Home from "./pages/Home/Index"

function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} ></Route>
        <Route path="/repositories" element={<Repositories/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas


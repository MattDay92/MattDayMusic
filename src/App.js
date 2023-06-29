import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './view/Home'
import PaperSwords from './view/PaperSwords'
import MakeMeAMatch from './view/MakeMeAMatch'
import SuperMario from './view/SuperMario'
import DifferentLens from './view/DifferentLens'



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/paperswords'} element={<PaperSwords />} />
          <Route path={'/makemeamatch'} element={<MakeMeAMatch />} />
          <Route path={'/supermarioisdead'} element={<SuperMario />} />
          <Route path={'/differentlens'} element={<DifferentLens />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


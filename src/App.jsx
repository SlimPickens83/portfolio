import React, { useState } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

// Components
import HomeGuest from "./components/HomeGuest"

function App() {
  const initialState = {}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeGuest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

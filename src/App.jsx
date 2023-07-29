import React, { useState } from "react"
import "./App.css"
import { BrowserRouter } from "react-router-dom"

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

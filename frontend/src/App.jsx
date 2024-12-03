import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Modal from "./components/Modal"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <Router>
        <Modal isOpen={true} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

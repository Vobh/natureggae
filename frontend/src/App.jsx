import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import RegisterModal from "./pages/RegisterModal"
import './App.css'
import Modal from "./components/Modal"
import HomePage from "./pages/HomePage"

function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Router>
      <button onClick={() => setShowModal(true)} className="bg-blue-700 text-white py-2 px-3 rounded">Open Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <RegisterModal />
      </Modal>  
        <Routes>
          <Route path="/" element={<HomePage />} />          
        </Routes>
      </Router>
    </>
  )
}

export default App

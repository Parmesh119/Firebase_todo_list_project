import './App.css'
import Add from './components/Add'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import List from './components/List'
import Update from './components/Update'
import AddF from './components/AddF'
import ListF from './components/ListF'
import UpdateF from './components/UpdateF'
import Login from './components/Login'
import Register from './components/SignUp'

function App() {
  const protectedRoute = (children: React.ReactNode) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      return children
    }
    return <Navigate to="/login" replace />
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={protectedRoute(<List />)} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={protectedRoute(<Add />)} />
          <Route path="/update/:id" element={protectedRoute(<Update />)} />
          <Route path="/list/F" element={protectedRoute(<ListF />)} />
          <Route path="/add/F" element={protectedRoute(<AddF />)} />
          <Route path="/update/F/:id" element={protectedRoute(<UpdateF />)} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

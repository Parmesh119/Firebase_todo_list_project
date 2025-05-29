import './App.css'
import Add from './components/Add'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import List from './components/List'
import Update from './components/Update'
import AddF from './components/AddF'
import ListF from './components/ListF'
import UpdateF from './components/UpdateF'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Sidebar from './components/Sidebar'

function App() {
  const protectedRoute = (children: React.ReactNode) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      return children
    }
    return <Navigate to="/login" />
  }
  return (
    <BrowserRouter>
      <span className='flex flex-row gap-4 justify-between'>
        <span>
          <Sidebar />
        </span>
        <span className='w-full'>
          <Routes>
            <Route path="/" element={protectedRoute(<List />)} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/add" element={protectedRoute(<Add />)} />
            <Route path="/update/:id" element={protectedRoute(<Update />)} />
            <Route path="/list/F" element={protectedRoute(<ListF />)} />
            <Route path="/add/F" element={protectedRoute(<AddF />)} />
            <Route path="/update/F/:id" element={protectedRoute(<UpdateF />)} />
          </Routes>
        </span>
      </span>
    </BrowserRouter>
  )
}

export default App

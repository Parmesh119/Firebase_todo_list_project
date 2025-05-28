import './App.css'
import Add from './components/Add'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './components/List'
import Update from './components/Update'
import AddF from './components/AddF'
import ListF from './components/ListF'
import UpdateF from './components/UpdateF'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/list/F" element={<ListF />} />
          <Route path="/add/F" element={<AddF />} />
          <Route path="/update/F/:id" element={<UpdateF />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

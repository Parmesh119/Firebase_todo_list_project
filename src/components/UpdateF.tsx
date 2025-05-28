import { useLocation } from "react-router-dom"
import { useState } from "react"
import { collectionName } from "../utils/config"
import { app } from '../utils/firebase'
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
export default function UpdateF() {
  const navigate = useNavigate()
  interface Faculty {
    name: string
    id: string
    age: number
  }
  const location = useLocation()
  const faculty = location.state?.faculty as Faculty
  const [facultyName, setFacultyName] = useState(faculty?.name ?? '')
  const [facultyAge, setFacultyAge] = useState(faculty?.age ?? 0)

  const updateFaculty = (e: React.FormEvent) => {
    e.preventDefault()
    const db = getFirestore(app)
    const docRef = doc(db, collectionName, faculty?.id ?? '')
    setDoc(docRef, { name: facultyName, age: facultyAge })
    navigate('/list/F')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Update</h1>
      <input type="text" placeholder="Name" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} />
      <input type="number" placeholder="Age" value={facultyAge} onChange={(e) => setFacultyAge(Number(e.target.value))} />
      <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={(e) => {
        updateFaculty(e)
      }}>Update</button>
    </div>
  )
}

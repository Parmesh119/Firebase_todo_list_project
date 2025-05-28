import { useState } from "react"
import { getDatabase, ref, set } from "firebase/database"
import { app } from "../utils/firebase"
import { dbName } from "../utils/config"
import { useNavigate } from "react-router-dom"
export default function Add() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()
    const addUser = async (e: React.FormEvent) => {
        e.preventDefault()
        const id = Math.random().toString(36).substring(2, 15)
        const db = getDatabase(app)
        const userRef = ref(db, `${dbName}/${id}`)
        set(userRef, {
                name: name,
                age: age
            })
            setName("")
            setAge("")
            navigate("/")
        }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <span className="flex flex-col items-center justify-center gap-2 bg-gray-300 p-4 rounded-lg">
                <h1>Add</h1>
                <input type="text" autoFocus className="placeholder:text-black placeholder:border-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" className="placeholder:text-black placeholder:border-2" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={(e) => addUser(e)}>Add</button>
            </span>
        </div>
    )
}

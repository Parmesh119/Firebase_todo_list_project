import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { app } from "../utils/firebase"
import { collectionName } from "../utils/config"
export default function AddF() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()
    const addUser = async (e: React.FormEvent) => {
        e.preventDefault()
        const db = getFirestore(app)
        const docRef = collection(db, collectionName)
        await addDoc(docRef, {
            name: name,
            age: age
        })
        navigate("/list/F")
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <span className="flex flex-col items-center justify-center gap-2 bg-gray-300 p-4 rounded-lg">
                    <h1>Add Faculty</h1>
                    <input type="text" autoFocus className="placeholder:text-black placeholder:border-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="placeholder:text-black placeholder:border-2" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={(e) => addUser(e)}>Add</button>
                </span>
            </div>
        </>
    )
}

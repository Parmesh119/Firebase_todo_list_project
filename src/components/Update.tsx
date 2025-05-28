import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { getDatabase, ref, set } from "firebase/database"
import {app} from '../utils/firebase'
import { dbName } from "../utils/config"
export default function Update() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { state: user } = useLocation()
    const [name, setName] = useState(user.user.name)
    const [age, setAge] = useState(user.user.age)
    
    const updateUser = () => {
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
            <h1>Update</h1>
            <input type="text" placeholder="id" value={id} disabled />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={() => updateUser()}>Update</button>
        </div>
    )
}

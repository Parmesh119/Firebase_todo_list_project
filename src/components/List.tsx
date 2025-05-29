import { useNavigate } from "react-router-dom"
import { getDatabase, ref, onValue, remove } from "firebase/database"
import { app } from "../utils/firebase"
import { dbName } from "../utils/config"
import { useState, useEffect } from "react"
export default function List() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const db = getDatabase(app)
        const userRef = ref(db, `${dbName}`)
        onValue(userRef, (snapshot) => {
            const data = snapshot.val()
            setUsers(data)
        })
    }, [])
    const deleteUser = (id: string) => {
        const db = getDatabase(app)
        const userRef = ref(db, `${dbName}/${id}`)
        remove(userRef)
    }
    return (
        <>
        <div className="flex flex-row gap-28 items-start justify-between">
            
        <div className="flex flex-col w-full rounded-lg bg-gray-300 items-center justify-center h-screen">
            <span className="flex flex-row w-full items-center justify-between gap-2 bg-gray-300 p-4 rounded-lg">
                <h1>List</h1>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={() => navigate("/add")}>Add</button>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={() => navigate("/list/F")} >List Faculty</button>
            </span>
            {users && <span className="flex flex-col w-full items-center justify-center gap-2 bg-gray-300 p-4 rounded-lg">
                {Object.entries(users).map(([id, user]: [string, { name: string, age: number }]) => (
                    <div key={id} className="flex flex-row w-full items-center justify-between gap-2 bg-gray-300 p-4 rounded-lg">
                        <h1>{user.name}</h1>
                        <h1>{user.age}</h1>
                        <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={() => navigate(`/update/${id}`, { state: { user } })}>Update</button>
                        <button className="bg-red-500 text-white px-8 py-2 rounded-md" onClick={() => deleteUser(id)}>Delete</button>
                    </div>
                ))}
            </span>
            }
        </div>
            </div>
        </>
    )
}

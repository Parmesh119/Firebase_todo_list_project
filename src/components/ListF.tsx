import { useState, useEffect } from "react"
import { getFirestore, collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import { app } from "../utils/firebase"
import { collectionName } from "../utils/config"
import { useNavigate } from "react-router-dom"

// Define the Faculty interface
interface Faculty {
    id: string;
    name: string;
    age: number;
    // Add other properties as needed
}

export default function ListF() {
    const [faculties, setFaculties] = useState<Faculty[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const db = getFirestore(app)
        const docRef = collection(db, collectionName)
        onSnapshot(docRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })) as Faculty[]
            setFaculties(data)
        })
    }, [])

    const deleteFaculty = (id: string) => {
        const db = getFirestore(app)
        const docRef = doc(db, collectionName, id)
        deleteDoc(docRef)
    }

    return (
        <>
            <div className="flex flex-col bg-gray-300 items-center justify-center h-screen">
                <span className="flex flex-col w-full items-center justify-between gap-2 bg-gray-300 p-4 rounded-lg">
                    <span className="flex flex-row w-full items-center justify-between gap-2 bg-gray-300 p-4 rounded-lg">
                        <h1>List Faculty</h1>
                        <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={() => navigate("/add/F")}>Add</button>
                        <button className="bg-blue-500 text-white px-8 py-2 rounded-md" onClick={() => navigate("/")} >List User</button>
                    </span>
                    <span className="flex flex-row w-full items-center justify-between gap-2 bg-gray-300 p-4 rounded-lg">
                        <h1>Name</h1>
                        <h1>Age</h1>
                    </span>
                    {faculties.map((faculty) => (
                        <span className="flex flex-row w-full items-center justify-between gap-2 bg-gray-300 p-4 rounded-lg" key={faculty.id}>
                            <h1>{faculty.name}</h1>
                            <h1>{faculty.age}</h1>
                            <button onClick={() => navigate(`/update/F/${faculty.id}`, { state: { faculty } })}  className="bg-blue-500 text-white px-8 py-2 rounded-md">update</button>
                            <button onClick={() => deleteFaculty(faculty.id)}  className="bg-red-500 text-white px-8 py-2 rounded-md">delete</button>
                        </span>
                    ))}
                </span>
            </div>
        </>
    )
}
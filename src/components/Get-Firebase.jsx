import app from "../config/firebase.jsx"
import { useState, useEffect } from "react"
import { getFirestore, getDocs, collection, doc, deleteDoc, updateDoc } from 'firebase/firestore'



const db = getFirestore(app)
const person_collection = collection(db, "Person_data")

export default function CRUD() {
    const [person, setPerson] = useState([])
    const [update, setUpdate] = useState("")
    

    const Data = async () => {
        try {
            const data = await getDocs(person_collection)
            const d = data.docs.map((doc_data) => {
                return (
                    {
                        id: doc_data.id,
                        ...doc_data.data()
                    }
                )
            })
            setPerson(d)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        Data()
    }, []);
    Data()

    const Delete = async (id) => {
        try {
            await deleteDoc(doc(db, "Person_data", id))
            alert('deleted successfully')
        } catch (err) {
            alert(err.message)
        }
    }

    const update_name = async (id) => {
        try {
            await updateDoc(doc(db, "Person_data", id), {
                Name: update
            })
            alert('successfully updated')
        } catch(err) {
            alert(err.message)
        }
    }

    

    return (
        <button>
            {
                person.map((daata) => {
                    return (
                        <div key={daata.id}>
                            <h1 style={{ color: "red" }}>{daata.Name}</h1>
                            {daata.Email}
                            <button onClick={() => Delete(daata.id)}>Delete it</button>
                            <input type="text" placeholder="update name..." onChange={(e) => setUpdate(e.target.value)} />
                            <button onClick={() => update_name(daata.id)}>Update</button>
                            <br />
                            <br />
                        </div>
                    )
                })
            }
        </button>
    )
}


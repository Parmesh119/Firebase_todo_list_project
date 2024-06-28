import { addDoc, getFirestore, collection } from "firebase/firestore"
import app from "../config/firebase.jsx"
import { useState } from "react"
import Get_Firebase from './Get-Firebase.jsx'

const db = getFirestore(app)
const person_collection = collection(db, "Person_data")

export default function Add_Firebase() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const add_data = async (e) => {
    e.preventDefault()
    try {
      await addDoc(person_collection, {
        Name: name,
        Email: email
      })
      alert('added successfully')
    } catch (err) {
      alert('error while adding data')
    }
  }
  
  return (
    <>
      <input type="text" placeholder="name" required onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
      <button onClick={add_data} >Submit</button>
      <br />
      <br />
      <Get_Firebase />
    </>
  )
}

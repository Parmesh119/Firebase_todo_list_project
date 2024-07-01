import { addDoc, getFirestore, collection } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { getAuth } from "firebase/auth"
import app from "../config/firebase.jsx"

import { useState } from "react"
import Get_Firebase from './Get-Firebase.jsx'

const storage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth(app)
const person_collection = collection(db, "Person_data")

export default function Add_Firebase() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [uploadFile, setUploadFile] = useState(null)

  const add_data = async (e) => {
    e.preventDefault()
    try {
      await addDoc(person_collection, {
        Name: name,
        Email: email,
        userId: auth?.currentUser?.uid
      })
      alert('added successfully')
    } catch (err) {
      alert(err)
    }
  }

  const upload = async () => {
    console.log(uploadFile.name)
    if(!uploadFile) return;         
    const storageRef = ref(storage, `my/${uploadFile.name}`)
    try {
        await uploadBytes(storageRef, uploadFile)
        alert('uploaded successfully')
    }catch(error) {
        alert(error.message)
    }
}

  return (
    <>
      <input type="text" placeholder="name" required onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
      <button onClick={add_data} >Submit</button>
      <br />
      <br />
      <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
      <button onClick={upload}>Upload file</button>
      <br/>
      <br />
      <Get_Firebase />
    </>
  )
}

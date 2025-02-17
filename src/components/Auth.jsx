import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { getAuth } from "firebase/auth";
import app from "../config/firebase.jsx"
import { useState } from "react"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

function App() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // console.log(auth?.currentUser?.email)

    const authe = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert('logged in successfully');
        } catch(error) {
            alert(error.message);
        }
    }
    const SignInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider)
            alert('logged in successfully')
        } catch(error) {
            alert(error.message);
        }
    }
    const SignOut = async () => {
        try {
            await signOut(auth)
            alert('sign out successfully')
        }catch(error) {
            alert(error.message)
        }
    }
    return (
        <>
            <input placeholder="email" type="email" required onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input placeholder="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={authe} >Submit</button>
            or
            <button onClick={SignInWithGoogle}>Sign In With Google</button>
            or
            <button onClick={SignOut}>Sign Out</button>
        </>
    )
}

export default App

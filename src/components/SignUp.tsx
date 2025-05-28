import { useState } from "react"
import { app } from "../utils/firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const signup = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                if (user) {
                    alert("User registered successfully!")
                    navigate("/login")
                } else {
                    alert("error while registering user!")
                }
            })
            .catch((error) => {
                console.error("Error signing up:", error)
            })
    }

    const signUpWithGoogle = () => {
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then((userCredential) => {
            const user = userCredential.user
            if (user) {
                alert("User registered successfully!")
                navigate("/login")
            } else {
                alert("error while registering user!")
            }
        }).catch((error) => {
            console.error("Error signing up:", error)
        })
    }

    return (
        <>
            <div className="flex flex-col rounded-lg p-4 gap-4 items-center justify-content-center bg-gray-200 text-black">
                <span className="text-2xl font-bold tracking-wider">Sign Up</span>
                <form onSubmit={signup} className="flex flex-col gap-4">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" className="placeholder:border-2 placeholder:text-black text-black" />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" className="placeholder:border-2 placeholder:text-black text-black" />
                    <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg text-white font-bold tracking-wider">Submit</button>
                </form>
                <button onClick={() => navigate("/login")} className="px-4 py-2 font-bold bg-blue-500 text-white rounded-lg">Login</button>
                <button onClick={signUpWithGoogle} className="px-4 py-2 bg-gray-600 text-white font-bold rounded-lg">Sign Up with Google</button>
            </div>
        </>
    )
}

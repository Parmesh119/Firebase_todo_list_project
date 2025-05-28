import { useState } from "react"
import { app } from "../utils/firebase"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                if (user) {
                    user.getIdToken().then((token) => {
                        localStorage.setItem("accessToken", token)
                        localStorage.setItem("refreshToken", user.refreshToken)
                        localStorage.setItem("uid", user.uid)
                        navigate("/")
                        
                        alert("User Logged In successfully!")
                    })
                } else {
                    alert("error while Login the user!")
                }
            })
            .catch((error) => {
                console.error("Error login", error)
            })
    }

    const loginWithGoogle = () => {
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider).then((userCredential) => {
            const user = userCredential.user
            if (user) {
                user.getIdToken().then((token) => {
                    localStorage.setItem("accessToken", token)
                    localStorage.setItem("refreshToken", user.refreshToken)
                    localStorage.setItem("uid", user.uid)
                    navigate("/list/F")

                    alert("User Logged In successfully!")
                })
            } else {
                alert("error while Login the user!")
            }
        })
            .catch((error) => {
                console.error("Error login", error)
            })
    }

    return (
        <>
            <div className="flex flex-col rounded-lg p-4 gap-4 items-center justify-content-center bg-gray-200 text-black">
                <span className="text-2xl font-bold tracking-wider">Login</span>
                <form onSubmit={login} className="flex flex-col gap-4">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" className="placeholder:border-2 placeholder:text-black text-black" />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" className="placeholder:border-2 placeholder:text-black text-black" />
                    <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg text-white font-bold tracking-wider">Login</button>
                </form>
                <button onClick={loginWithGoogle} className="px-4 py-2 bg-gray-600 text-white font-bold rounded-lg">Login with Google</button>
            </div>
        </>
    )
}

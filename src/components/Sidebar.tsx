import { Link, useNavigate } from "react-router-dom"
import { app } from '../utils/firebase'
import { getAuth, signOut } from "firebase/auth"
export default function Sidebar() {
    const navigate = useNavigate()
    const logout = () => {
        const auth = getAuth(app)
        signOut(auth).then(() => {
            navigate("/login")
            localStorage.clear()
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <>
            <div className="flex flex-col w-40 bg-gray-900 text-white rounded-lg p-4">
                <span className="text-2xl">Links</span>
                <span className="flex flex-col mt-8">
                    <Link to="/add">Add user</Link>
                    <Link to="/">List user</Link>
                    <Link to="/list/F">List faculty</Link>
                    <Link to="/add/F">Add Faculty</Link>
                </span>
                <button onClick={logout} type="button" className="bg-gray-100 text-black mt-8 rounded-lg font-bold tracking-wider py-2 px-4">Logout</button>
            </div>
        </>
    )
}

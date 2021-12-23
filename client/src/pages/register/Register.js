import { useRef } from 'react'
import "./register.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Register = () => {
    const username = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const email = useRef()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value) {
           passwordAgain.current.setCustomeValidity("password not match") 
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                const res = await axios.post("/auth/register", user)
                navigate("/login")
            } catch(err) {
                console.log('error', err)
            }
            
        }
    }

    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">Socail App</h3>
                    <span className="login-desc">
                        Connect with friends and the world around you on socail app.
                    </span>
                </div>
                <form className="login-right" onSubmit={handleSubmit}>
                    <div className="login-box">
                        <input
                            placeholder="Username"
                            type="text"
                            className="login-input"
                            ref={username}
                            required
                        />
                        <input
                            placeholder="Email"
                            type="email"
                            className="login-input"
                            ref={email}
                            required
                        />
                        <input
                            placeholder="Enter password"
                            type="password"
                            className="login-input"
                            ref={password}
                            minLength={6}
                            required
                        />
                        <input
                            placeholder="Confirm password"
                            type="password"
                            className="login-input"
                            ref={passwordAgain}
                            required
                        />
                        <button className="login-btn">Sign Up</button>
                        {/* <Link to="/login"> */}
                        <button className="signup-btn" onClick={() => navigate("/login")}>Login</button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

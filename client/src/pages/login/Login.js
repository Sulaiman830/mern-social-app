import {useRef, useContext} from 'react'
import "./login.css"
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({email: email.current.value, password: password.current.value}, dispatch, () => navigate("/"))
    }
    console.log('userCont', user)
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">Social App</h3>
                    <span className="login-desc">
                        Connect with friends and the world around you on social app.
                    </span>
                </div>
                <div className="login-right">
                    <form className="login-box" onSubmit={handleSubmit}>
                        <input 
                            placeholder="Email" 
                            type="email" 
                            className="login-input" 
                            ref={email}
                            required
                        />
                        <input 
                            placeholder="Password" 
                            type="password" 
                            className="login-input" 
                            ref={password}
                            required 
                            minLength="6"
                        />
                        <button className="login-btn" disabled={isFetching}>
                            {isFetching? 
                            <CircularProgress color="inherit" size={30}/> 
                            : "Log In"}
                            </button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="signup-btn">Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

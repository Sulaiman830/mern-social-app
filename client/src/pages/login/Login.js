import {useRef} from 'react'
import "./login.css"

const Login = () => {
    const email = useRef()
    const password = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">Shinsocial</h3>
                    <span className="login-desc">
                        Connect with friends and the world around you on shinsocial.
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
                        <button className="login-btn">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="signup-btn">Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

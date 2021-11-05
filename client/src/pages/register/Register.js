import "./register.css"

const Register = () => {
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
                    <div className="login-box">
                    <input placeholder="Username" type="text" className="login-input" />
                        <input placeholder="Email" type="email" className="login-input" />
                        <input placeholder="Enter password" type="password" className="login-input" />
                        <input placeholder="Confirm password" type="password" className="login-input" />
                        <button className="login-btn">Sign Up</button>
                        <button className="signup-btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

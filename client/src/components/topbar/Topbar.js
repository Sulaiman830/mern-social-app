import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"
import { Link } from "react-router-dom";
const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Shinsocial</span>
                </Link>
            </div>
            <div className="topbar-center">
                <div className="search-bar">
                    <Search className="search-icon"/>
                    <input placeholder="Search for friend, post or video" type="text" className="search-input" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Homepage</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                <div className="topbar-icon-item">
                        <Person/>
                        <span className="topbar-icon-badge">1</span>
                    </div><div className="topbar-icon-item">
                        <Chat/>
                        <span className="topbar-icon-badge">2</span>
                    </div><div className="topbar-icon-item">
                        <Notifications/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="user profile image" className="topbar-img" />
            </div>
        </div>
    )
}

export default Topbar

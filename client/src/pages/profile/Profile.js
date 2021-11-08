import {useState, useEffect} from "react"
import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Profile = () => {
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;

    useEffect(() => {
        const fetchUsers = async () => {
         const res = await axios.get(`/users?username=${username}`)
         console.log('user11', res)
         setUser(res.data)
        }
        fetchUsers();
     }, [username])

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img src={user.coverPicture || PF+"/person/no-cover.png"} alt="" className="cover-img" />
                            <img src={user.profilePicture || PF+"/person/no-avatar.png"} alt="" className="user-img" />
                        </div>
                        <div className="profile-info">
                            <h4 className="username">{user.username}</h4>
                            <p className="desc">{user.desc}</p>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed username={username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

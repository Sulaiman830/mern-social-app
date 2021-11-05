import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img src="/assets/post/3.jpeg" alt="" className="cover-img" />
                            <img src="/assets/post/7.jpeg" alt="" className="user-img" />
                        </div>
                        <div className="profile-info">
                            <h4 className="username">John Doe</h4>
                            <p className="desc">Hello, everyone</p>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

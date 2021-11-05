import "./online.css"

const Online = ({user}) => {
    console.log("user", user)
    const {profilePicture, username} = user
    return (
        <li className="rightbar-friend">
        <div className="rightbar-img-container">
            <img src={profilePicture} alt="" className="profile-img" />
            <span className="rightbar-online"></span>
        </div>
        <span className="rightbar-username">{username}</span>
    </li>
    )
}

export default Online

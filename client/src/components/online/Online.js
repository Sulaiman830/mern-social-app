import "./online.css"

const Online = ({user}) => {
    console.log("user", user)
    const {profilePicture, username} = user
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbar-friend">
        <div className="rightbar-img-container">
            <img src={PF+profilePicture} alt="" className="profile-img" />
            <span className="rightbar-online"></span>
        </div>
        <span className="rightbar-username">{username}</span>
    </li>
    )
}

export default Online

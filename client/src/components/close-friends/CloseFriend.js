import "./close-friend.css"

const CloseFriend = ({user}) => {
    const {profilePicture, username} = user
    return (
        <li className="sidebar-friend">
            <img src={profilePicture} alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">{username}</span>
        </li>
    )
}

export default CloseFriend

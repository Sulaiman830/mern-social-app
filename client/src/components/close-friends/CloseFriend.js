import "./close-friend.css"

const CloseFriend = ({user}) => {
    const {profilePicture, username} = user
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebar-friend">
            <img src={PF+profilePicture} alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">{username}</span>
        </li>
    )
}

export default CloseFriend

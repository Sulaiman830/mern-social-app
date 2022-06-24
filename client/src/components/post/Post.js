import {useState, useEffect, useContext} from "react"
import "./post.css"
import {MoreVert} from "@mui/icons-material"
// import {Users} from "../../dummyData"
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Post = ({post}) => {
    console.log("post", post)
    const {userId, likes, desc, comment, img, createdAt} = post
    // const user = Users.filter(user => user.id === post.userId)[0]
    // const {profilePicture, username} = user
    const [totalLikes, setTotalLikes] = useState(likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user: currentUser} = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])
    
    const likeHandler = () => {
        // not completed yet
        try {
            axios.put("/posts/"+ post._id+"/like", {userId: currentUser._id})
        } catch(err) {
            console.log('error', err)
        }
        setTotalLikes(isLiked ? totalLikes - 1 : totalLikes + 1) 
        setIsLiked(!isLiked)
    }
    useEffect(() => {
        const fetchUsers = async () => {
         const res = await axios.get(`/users?userId=${userId}`)
         console.log('user', res)
         setUser(res.data)
        }
        fetchUsers();
     }, [userId])

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <Link to={`/profile/${user.username}`}>
                        <img src={user.profilePicture ? PF + user.profilePicture : PF+"/person/no-avatar.png"} alt="" className="post-profile-img" />
                        </Link>
                        <span className="post-user-name">{user.username}</span>
                        <span className="post-date">{format(createdAt)}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert className="post-icon"/>
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{desc}</span>
                    <img src={img || PF+"/person/no-cover.png"} alt="" className="post-img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/assets/like.png" alt="" onClick={likeHandler} className="like-icon" />
                        <img src="/assets/heart.png" alt="" onClick={likeHandler} className="like-icon" />
                        <span className="like-counter">{totalLikes} people liked it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

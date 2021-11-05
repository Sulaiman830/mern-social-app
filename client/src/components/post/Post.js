import {useState} from "react"
import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"

const Post = ({post}) => {
    const {date, like, desc, comment, photo} = post
    const user = Users.filter(user => user.id === post.userId)[0]
    const {profilePicture, username} = user
    const [likes, setLikes] = useState(like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1) 
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={profilePicture} alt="" className="post-profile-img" />
                        <span className="post-user-name">{username}</span>
                        <span className="post-date">{date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert className="post-icon"/>
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{desc}</span>
                    <img src={photo} alt="" className="post-img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/assets/like.png" alt="" onClick={likeHandler} className="like-icon" />
                        <img src="/assets/heart.png" alt="" onClick={likeHandler} className="like-icon" />
                        <span className="like-counter">{likes} people liked it</span>
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

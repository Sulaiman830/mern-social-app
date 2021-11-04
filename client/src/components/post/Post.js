import "./post.css"
import {MoreVert} from "@mui/icons-material"

const Post = () => {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src="/assets/person/1.jpeg" alt="" className="post-profile-img" />
                        <span className="post-user-name">John Doe</span>
                        <span className="post-date">5 mins ago</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert className="post-icon"/>
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">Hey! its my first post</span>
                    <img src="/assets/post/1.jpeg" alt="" className="post-img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/assets/like.png" alt="" className="like-icon" />
                        <img src="/assets/heart.png" alt="" className="like-icon" />
                        <span className="like-counter">32 people liked it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

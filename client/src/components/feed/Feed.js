import {useState, useEffect, useContext} from "react"
import axios from 'axios'
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { AuthContext } from "../../context/AuthContext"
// import { Posts } from "../../dummyData"

const Feed = ({username}) => {

    const [posts, setPosts] = useState([])
    const {user} = useContext(AuthContext)

    console.log('user', user)

    useEffect(() => {
       const fetchPosts = async () => {
        const res = username ? 
            await axios.get("/posts/profile/" + username) : 
            await axios.get("/posts/timeline/" + user._id)
        setPosts(res.data)
       }
       fetchPosts();
    }, [username, user._id])

    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share/>
                {posts.map((post) => {
                    console.log('post', post)
                    return (
                        <Post key={post._id} post={post}/>
                    )  
                })}
                
            </div>
        </div>
    )
}

export default Feed

import {useState, useEffect} from "react"
import axios from 'axios'
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
// import { Posts } from "../../dummyData"

const Feed = ({username}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
       const fetchPosts = async () => {
        const res = username ? 
            await axios.get("/posts/profile/" + username) : 
            await axios.get("/posts/timeline/618165f4454bf288fb20de25")
        setPosts(res.data)
       }
       fetchPosts();
    }, [])
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

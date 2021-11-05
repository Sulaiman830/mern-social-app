import "./sidebar.css";
import {
    RssFeed, Chat, Bookmark, HelpOutline, WorkOutline, Event, School,
    Group, VideoLibrary
} from "@mui/icons-material"
import {Users} from "../../dummyData" 
import CloseFriend from "../close-friends/CloseFriend";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <RssFeed className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Feed
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <Chat className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Chat
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <VideoLibrary className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Videos
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <Group className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Groups
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <Bookmark className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Bookmark
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <HelpOutline className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Questions
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <WorkOutline className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <Event className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Events
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <School className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="sidebar-btn">Show More</button>
                <hr className="sidebar-hr"/>
                <ul className="sidebar-friend-list">
                    {Users.map((user) => {
                        return (
                            <CloseFriend key={user.id} user={user}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

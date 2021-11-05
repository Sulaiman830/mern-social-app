import "./rightbar.css"
import Online from "../online/Online"
import { Users } from "../../dummyData"

const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthday-container">
                    <img src="/assets/gift.png" alt="" className="birthday-img" />
                    <span className="birthday-text">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbar-ads" />
                <h4 className="rightbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    {Users.map((user) => {
                        return (
                            <Online key={user.id} user={user} />
                        )
                    })}

                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="title">User Information</h4>
                <div className="user-info">
                    <div className="user-info-item">
                        <span className="user-info-key">City:</span>
                        <span className="user-info-value">New York</span>
                    </div>
                    <div className="user-info-item">
                        <span className="user-info-key">From:</span>
                        <span className="user-info-value">Madrid</span>
                    </div>
                    <div className="user-info-item">
                        <span className="user-info-key">Relationship:</span>
                        <span className="user-info-value">Married</span>
                    </div>
                </div>
                <h4 className="title">User Friends</h4>
                <div className="followings">
                    <div className="following">
                        <img src="/assets/person/1.jpeg" alt="" className="following-img" />
                        <span className="following-name">John Carter</span>
                    </div><div className="following">
                        <img src="/assets/person/2.jpeg" alt="" className="following-img" />
                        <span className="following-name">John Carter</span>
                    </div><div className="following">
                        <img src="/assets/person/3.jpeg" alt="" className="following-img" />
                        <span className="following-name">John Carter</span>
                    </div><div className="following">
                        <img src="/assets/person/4.jpeg" alt="" className="following-img" />
                        <span className="following-name">John Carter</span>
                    </div><div className="following">
                        <img src="/assets/person/5.jpeg" alt="" className="following-img" />
                        <span className="following-name">John Carter</span>
                    </div><div className="following">
                        <img src="/assets/person/6.jpeg" alt="" className="following-img" />
                        <span className="following-name">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbar-wrapper">
                <ProfileRightbar/>
            </div>
        </div>
    )
}

export default Rightbar

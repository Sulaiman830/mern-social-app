import { useState, useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  AutoFixOffSharp,
} from "@mui/icons-material";

const Share = () => {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log("file upload fialed", err);
      }
    }
    try {
      await axios.post("/posts", newPost);
    } catch (err) {
      console.log("post failed", err);
    }
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-profile-img"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/1.jpeg"
            }
            alt=""
          />
          <input
            ref={desc}
            type="text"
            placeholder={
              "What's in your mind" + user.username + "?"
            }
            className="share-input"
          />
        </div>
        <hr className="share-hr" />
        <form
          className="share-bottom"
          onSubmit={submitHandler}
        >
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMedia
                htmlColor="tomato"
                className="share-icon"
              />
              <span className="share-option-text">
                Photo or Video
              </span>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="share-option">
              <Label
                htmlColor="blue"
                className="share-icon"
              />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <Room
                htmlColor="green"
                className="share-icon"
              />
              <span className="share-option-text">
                Location
              </span>
            </div>
            <div className="share-option">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="share-icon"
              />
              <span className="share-option-text">
                Feelings
              </span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </form>
      </div>
    </div>
  );
};

export default Share;

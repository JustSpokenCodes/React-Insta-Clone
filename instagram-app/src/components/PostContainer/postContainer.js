import React, {useState} from 'react';
import uuidv4 from "uuid/v4"
import './PostContainer.css';
import { IoIosHeartEmpty, IoIosCompass } from 'react-icons/io';
import CommentSection from '../CommentSection/CommentSection';
import Form from "../SearchBar/Form";

const PostContainer = ({props}) => {
    const { comments, thumbnailUrl, imageUrl, timestamp, likes, username } = props;
    const [inputValue, setChange] = useState('');
    const [inputComment, setComment] = useState(comments);
    const handleChange = (e) =>{
        setChange(e.target.value);
    }
    const postComment = (e) => {
        e.preventDefault();
        const newComment = {
            id: uuidv4(),
            username: "user",
            text: inputValue
        };
        setComment(comments.concat(newComment));
        setChange('');
    }

    return (
        <div className="post-container">
            <div className="user-info">
                <img className="profile-pic" src={thumbnailUrl} alt="user-profile" />
                <p>{username}</p>
            </div>
            <div className="user-post">
                <img className="post-image" src={imageUrl} alt="user-post"/>
            </div>
            <div className="reaction">
                <div className="post-icons">
                    <IoIosHeartEmpty /> <IoIosCompass/>
                </div>
                {likes} likes
            </div>
            { inputComment.map((comment) =>{
                return <CommentSection key={comment.id} props = {comment}/>
            })
            }
            <div className="timestamp">
                {timestamp}
            </div>
            <Form 
                inputValue={inputValue}
                changeHandler={handleChange}
                addComment= {postComment}
            />
        </div>
    )
}


export default PostContainer;

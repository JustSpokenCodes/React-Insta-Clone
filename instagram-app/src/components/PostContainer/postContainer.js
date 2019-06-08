import React from 'react';
import './PostContainer.css';
import { IoIosHeartEmpty, IoIosCompass } from 'react-icons/io';
import CommentSection from '../CommentSection/CommentSection';

 const PostContainer = (props) => {
    return (
        <div className="post-container">
            <div className="user-info">
                <img className="profile-pic" src={props.post.thumbnailUrl} alt="user-profile" />
                <p>{props.post.username}</p>
            </div>
            <div className="user-post">
                <img className="post-image" src={props.post.imageUrl} alt="user-post"/>
            </div>
            <div className="reaction">
                <div className="post-icons">
                    <IoIosHeartEmpty /> <IoIosCompass/>
                </div>
                {props.post.likes} likes
            </div>
            {props.post.comments.map((comment, index) => {
                console.log('==', comment);
                return <CommentSection key={index} props= {comment} />
            })}
            <div className="timestamp">
                {props.post.timestamp}
            </div>
        </div>
    )
}

 export default PostContainer;
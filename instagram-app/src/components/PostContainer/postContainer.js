import React from 'react';
import './PostContainer.css';

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
        </div>
    )
}

 export default PostContainer;
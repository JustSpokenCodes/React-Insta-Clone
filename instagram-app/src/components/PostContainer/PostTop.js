import React from "react";

const PostTop = props => {
    return (
        <div className="user-top">
            <img className="profile-pic" 
                src={props.thumbnailUrl} 
                alt="user-profile" />
            <p>{props.username}</p>
        </div>
    );
};

export default PostTop;
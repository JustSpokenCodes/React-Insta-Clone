import React from "react";

const PostTop = props => {
    return (
        <div className="user-top">
            <img className="profile-pic" 
                src={props.thumbnailUrl} 
                alt="user-profile" 
            />
            <div className="Username">
            {props.username}
            </div>
        </div>
    );
};

export default PostTop;
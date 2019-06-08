import React from "react";
import "./CommentSection.css";

const CommentSection = ({props}) => {
    return (
        <div className= "comment-container">
            <p>
                <span className="user-comment">
                    {props.username}
                </span>
                {props.text}
            </p>
        </div>
    )
}

export default CommentSection;
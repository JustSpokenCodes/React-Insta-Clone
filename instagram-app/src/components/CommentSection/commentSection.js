import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = props => {
    return (
        <div className= "comment-container">
            <p>
                <span className="user-comment">
                    {props.commment.username}
                </span>
                {props.comment.text}
            </p>
        </div>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default CommentSection;
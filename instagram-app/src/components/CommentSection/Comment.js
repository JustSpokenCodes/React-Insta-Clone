import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
        <div className="comment">
            <div className="username">
                {props.comment.username}
            </div>
            <div className="user-comment">
                {props.comment.text} 
                {''}
            </div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;
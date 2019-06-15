import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
        <div className="comment">
            <div className="username">
                {props.comment.username}
            </div>
        </div>
    )
}

export default Comment;
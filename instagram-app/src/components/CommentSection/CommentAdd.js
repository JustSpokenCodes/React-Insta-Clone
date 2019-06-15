import React from "react";

const CommentAdd = props =>{
    return (
        <div className="commentAdd">
            <form onSubmit= {props.addComment}>
                <input
                    type="text"
                    value={props.comment}
                    placeholder="Add Comment..!"
                    onChange={props.newComment}
                />
            </form>
        </div>
    )
}

export default CommentAdd;
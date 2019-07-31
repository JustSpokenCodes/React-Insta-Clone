import React from "react";
import PostTop from "./PostTop";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    render(){
        return(
            <div className="PostContainer">
                <div className="PostTopContainer">
                    <PostTop 
                        username={this.props.post.username}
                        thumbnailUrl={this.props.post.thumbnailUrl}
                    />
                </div>
                <div className="ImgContainer">
                    <img 
                        alt="post thumbnail"
                        className="post-image"
                        src={this.props.post.imageUrl}
                    />
                </div>
                <CommentSection 
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape ({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;
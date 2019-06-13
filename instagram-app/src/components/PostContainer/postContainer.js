import React, {Component} from 'react';
import './PostContainer.css';
import { IoIosHeartEmpty, IoIosCompass } from 'react-icons/io';
import CommentSection from '../CommentSection/CommentSection';
import Form from "../SearchBar/Form";

class PostContainer extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            searchPost:[]
        };
    }

    componentDidMount(){
        this.setState({posts: dummyData});
    }

    searchPostsHandler = event => {
        const posts = this.state.posts.filter(p => {
            if (p.username.includes(event.target.value)) {
                return p;
            }
        })
    }
    return (
        <div className="post-container">
            <div className="user-post">
                <img className="post-image" src={imageUrl} alt="user-post"/>
            </div>
            <div className="reaction">
                <div className="post-icons">
                    <IoIosHeartEmpty /> <IoIosCompass/>
                </div>
                {likes} likes
            </div>
            { inputComment.map((comment) =>{
                return <CommentSection key={comment.id} props = {comment}/>
            })
            }
            <div className="timestamp">
                {timestamp}
            </div>
            <Form 
                inputValue={inputValue}
                changeHandler={handleChange}
                addComment= {postComment}
            />
        </div>
    )
}


export default PostContainer;

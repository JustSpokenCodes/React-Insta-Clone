import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import withAuthenticate from "./components/Authentication/withAuthenticate";



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchTerm= {this.state.searchTerm}
          searchPosts= {this.searchPostsHandler}
          />
        <PostContainer 
          posts= {
            this.state.searchPosts.length > 0
            ? this.state.searchPosts
            : this.state.posts
          }
          />
      </div>
    );
  }
}

export default withAuthenticate(App);
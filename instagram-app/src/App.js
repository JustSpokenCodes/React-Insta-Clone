import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from './components/Login/Login';



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchTerm= {this.state.searchTerm}
          searchPosts= {this.searchPostsHandler}
          />
        <PostContainer 
          />
      </div>
    );
  }
}

export default withAuthenticate(App);
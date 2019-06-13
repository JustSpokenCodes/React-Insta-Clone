import React from 'react';
import data from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from './components/Login/Login';

const ComponentFromWithAutheticate = withAuthenticate(PostContainer)(Login);

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ComponentFromWithAutheticate/>
        <SearchBar />
        {post.map((userPost, index) =>{
          return (<PostContainer key={index} props={userPost}/>)
      })}
      </div>
    );
  }
}

export default withAuthenticate(PostContainer)(Login);

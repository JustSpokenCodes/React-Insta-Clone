import React from 'react';
import data from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

function App(){
  const [post] = useState(data);
  return (
    <div className="App">
      <SearchBar />
      {post.map((userPost, index) =>{
        return <PostContainer key={index} post={userPost}/>
      })}
    </div>
  );
}

export default App;

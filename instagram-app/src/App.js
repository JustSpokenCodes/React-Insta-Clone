import React, { Component } from 'react';
import withAuthenticate from "./components/Authentication/withAuthenticate";
import PostPage from "./components/PostContainer/PostPage";

class App extends Component {
  constructor() {
    super();
    this.state= {};
  }

  render(){
    return (
      <div className="App">
        <PostPage />
      </div>
    )
  }
}

export default withAuthenticate(App);
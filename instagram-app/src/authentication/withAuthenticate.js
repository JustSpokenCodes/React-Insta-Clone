import React from "react";

const withAuthenticate = PostComp =>
    class extends React.Component {
        render(){
            return <PostComp />;
        }
    }

export default withAuthenticate;
import React from "react";
import App from "../App";

const renderConditional = PostComp => AppComp =>
    class extends React.Component {
        render(){
            if (localStorage.getItem("showPostPage")) {
                return <PostComp />;
            }
            return <AppComp />;
        }
    };

export default renderConditional;
import React from 'react';
import './Form.css';

 const Form = ({ inputValue, changeHandler, addComment }) => {
    return (
    <form onSubmit={(event) => addComment(event)}>
        <input
        className="form-input"
        type="text"
        value={inputValue}
        onChange={changeHandler}
        placeholder="Add a comment"
        />
    </form>)
}

 export default Form;
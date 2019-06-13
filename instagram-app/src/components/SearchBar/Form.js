import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <div className= "Form">
            <form onSubmit= {props.submitComment}>
            <input
            className="form-input"
            type="text"
            value={props.comment}
            onChange={props.changeHandler}
            placeholder="Add a comment"
        />
    </form>
    </div>
    )
}

export default Form;
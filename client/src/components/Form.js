import React from "react";


function Form(props) {
    return (
        <>
            <h1>Google Books search</h1>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                placeholder="Enter text here"
            />
            <button onClick={props.handleFormSubmit}>
                Search
        </button>
        </>
    );
}

export default Form;
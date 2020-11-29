import React, { Component } from "react";

class Results extends Component {
    state = {
        savedBooks: [],
    }

    render() {
        return (
            <div>
                {this.props.books.map(result => (
                    <div key={result._id}>
                        <img alt={result.title} className="img-fluid" src={result.image} />
                        <h5>{result.title} by {result.authors}</h5>
                        <p>{result.description}</p>
                        <a href={result.link} target="_blank" >View</a>
                    </div>
                ))}
            </div>
        )
    }
}

export default Results;
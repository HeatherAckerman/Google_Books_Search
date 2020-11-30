import React, { Component } from "react";
import API from "../utils/API";
import { Container, Button } from "react-bootstrap";

class Results extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <>
            <Container>
                {this.props.books.map(result => (
                    <div key={result._id}>
                        <img alt={result.title} className="img" src={result.image} />
                        <h5>{result.title} by {result.authors}</h5>
                        <p>{result.description}</p>
                        <Button className="btn" href={result.link} target="blank" > View </Button>
                        <Button className="btn" onClick={() => this.handleSave(result)}> Save 
                            {this.state.savedBooks.map(book => book._id).includes(result._id)}
                        </Button>
                        <br />
                        <hr />
                        <br />
                    </div>
                ))}
                </Container>
            </>
        )
    }
}

export default Results;
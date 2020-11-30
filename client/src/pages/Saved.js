import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import { Container, Row} from "react-bootstrap";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <h1>Saved books</h1>
                    </Row>
                    <Row>
                        <Results books={this.state.savedBooks} />
                    </Row>
                </Container>
            </>
        )
    }
}

export default Saved;

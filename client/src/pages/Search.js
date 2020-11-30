import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";
import { Container, Row} from "react-bootstrap";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    componentDidMount() {
        this.searchBooks();
    }

    createBook = data => {
        return {
            _id: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            description: data.volumeInfo.description,
            image: data.volumeInfo.imageLinks.thumbnail,
            link: data.volumeInfo.previewLink
        }
    }

    searchBooks = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(data => this.createBook(data)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Form
                            search={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Row>
                    <br /><br />
                    <Row>
                        <h1>Results</h1>
                    </Row>
                    <Row>
                        <Results books={this.state.books} />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Search;
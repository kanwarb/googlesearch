import React, { Component } from "react";
import API from "../utils/API";
import SearchBook from "../components/SearchBook"
import Container from "../components/Container";

class Search extends Component {
state = {
  books: [],
  title: "",
  author: "",
  sypnosis: ""
};

handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

render() {
    return(
        <div>
          <Container>
          <SearchBook
            handleInputChange={this.handleInputChange}
            books={this.state.books}
            />
            </Container>

          
      </div>
    )

}
}

export default Search;

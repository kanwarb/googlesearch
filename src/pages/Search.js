import React, { Component } from "react";
import API from "../utils/API";
import SearchBook from "../components/SearchBook"
import Container from "../components/Container";
// import SearchResults from "../components/SearchResults";
import {List, ListItem} from "../components/List";
class Search extends Component {
state = {
  books: [],
  title: "",
  author: [],
  description: "",
  saved: "",
  results: [],
  image: "",
  link: ""

};

handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getGoogleBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
       
        this.setState({ books: res.data.items, error: "" });
        console.log(res.data.items);
        
      })
      .catch(err => this.setState({ error: err.message }));
  };

render() {
      return(
        <Container>
          <h1 className="text-center"> (React) Google Books Search</h1>
          <h3 className="text-center">Search for and Save Books of Interest</h3>
          <SearchBook
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            /><br />
          {this.state.books.map((book,index)=> (
            <div className="row">
              <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                  <span className="card-title" key={book[index]}>{book.volumeInfo.authors}</span>
                  <div className="card-body">
                  <img alt="Books" src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid float-left" />
                  <p>{book.volumeInfo.description}</p>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          ))}
      </Container>
      )
}
  
}

export default Search;

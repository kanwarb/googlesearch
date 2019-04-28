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
            />
                      <br />
          <div className="container mt-5">


          {this.state.books.map((book,index)=> (
            <div className="row">
              <div className="col s12">
              <div className="card  mt-3" >
                  <div className="card-content">
                  <div>
                  <h4><strong>Title: {book.volumeInfo.title}</strong></h4>
                   <button className="float-right bg-success"
                        onClick={API.saveBook({

                        })}
                
                   >Save</button>
                   <a href={book.volumeInfo.infoLink} target="_blank"> <button className="float-right bg-info">View</button></a>
                  </div>
                  <h6>Subtitle: {book.volumeInfo.subtitle}</h6>
                  <p className="card-title" key={book[index]}>Authors: {book.volumeInfo.authors},</p>
                  <div className="card-body">
                  <img alt="Books" src={book.volumeInfo.imageLinks.thumbnail} className="img float-left" />
                    <p >{book.volumeInfo.description}</p>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          ))}
          </div>  
      </Container>
      )
}
  
}

export default Search;

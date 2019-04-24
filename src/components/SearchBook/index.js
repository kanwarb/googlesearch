import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBook(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="books">Book Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          type="text"
          className="form-control"
          placeholder="Type in book to search"
          id="book"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBook;

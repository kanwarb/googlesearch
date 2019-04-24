import React from "react";

function searchBook(props) {



    return(

        <form className="search">
        <div className="form-group">
            <h1>Search Book Name</h1>
            <Input 
               name={this.state.name}
               onChange={this.handleChange}
               value= {this.state.value}
               className="form-contorl"
                placeholder="Enter a Bookname to search" 
                type="text" />
        </div>
        </form>
    );


}

export default searchBook;
import React from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
state = {
  books: [],
  title: "",
  author: "",
  sypnosis: ""
};

Search() {
    return(
        <div>
            <h1>
                Saved Function 
            </h1>
        </div>
    )

}

export default Search
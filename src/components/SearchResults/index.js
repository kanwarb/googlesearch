import React from "react";
import "./style.css";
import {List, ListItem} from "../List";

function SearchResults({results}) {

  return(

   {results.maps(result => (
      <ListItem key={result._id}>
      <img alt="Books" src={result} className="img-fluid" />

    </ListItem>
  ))}

  )
   }

  

export default SearchResults;

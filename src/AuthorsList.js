import React from "react";
import {connect} from "react-redux";
// Components
import AuthorCard from "./AuthorCard";

const mapStateToProps = state => {
  return {
     authors:state.authors
  }}

const AuthorsList = (props) => {
  
  const authorCards = props.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
};


//export default AuthorsList;
export default connect(mapStateToProps)(AuthorsList);

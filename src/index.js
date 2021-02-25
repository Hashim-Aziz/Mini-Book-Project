import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup variables
import { books } from "./books";
import Book from "./Book";

//JSX rules
//single return element
//close every element
// use camel case for html attributes
//className instead of class

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>; //<Book key={book.id} book={...book}></Book> spread operater book object
      })}
      ;
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));

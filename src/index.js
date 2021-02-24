import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup variables
const books = [
  {
    title: "I Love You to the Moon and Back Board book",
    author: "Amelia Hepworth",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "The Four Winds: A Novel Hardcover",
    author: "Kristin Hannah",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51r9ZiBU6rL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – Illustrated",
    author: "James Clear",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

//JSX rules
//single return element
//close every element
// use camel case for html attributes
//className instead of class

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
      ;
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book; //props destructuring
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

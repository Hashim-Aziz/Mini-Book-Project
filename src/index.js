import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup variables
const firstbook = {
  title: "I Love You to the Moon and Back Board book",
  author: "Amelia Hepworth",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};

const secondbook = {
  title: "The Four Winds: A Novel Hardcover",
  author: "Kristin Hannah",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51r9ZiBU6rL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
};

//JSX rules
//single return element
//close every element
// use camel case for html attributes
//className instead of class

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstbook.img}
        title={firstbook.title}
        author={firstbook.author}
      />
      <Book
        img={secondbook.img}
        title={secondbook.title}
        author={secondbook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

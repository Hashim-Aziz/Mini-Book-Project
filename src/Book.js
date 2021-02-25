import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book; //props destructuring
  //Atributes eventHandler
  //onClick onMouseOver

  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(author)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;

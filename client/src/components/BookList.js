import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = (props) => {
  const [selected, setSelected] = useState(null);

  const displayBook = () => {
    var data = props.data;

    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data?.books?.map((book) => {
        return (
          <li
            key={book.id}
            onClick={(e) => {
              setSelected(book.id);
            }}
          >
            {book.name}
          </li>
        );
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBook()}</ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);

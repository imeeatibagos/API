import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBCW-xXeNtwijX0Z4bdxmPNWWD6JfRI8gk" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />

            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <img src="../images/book-6.png" alt="" />
        </div>
      </div>

      <div className="container"></div>
      {<Card book={bookData} />}
    </>
  );
};
export default Main;

import React, { useState } from "react";
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import booksImg from "../../assets/images/book.png";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetMore } from "../../redux/actions/actions";
import Preloader from "../../common/preloader";
import DatePicker from "react-datepicker";
import "./books.css";
import BookType from './type'
require("react-datepicker/dist/react-datepicker.css");

function Books() {
  const [loading, setLoading] = useState(false);
  const unfilteredBooks: Array<BookType> = useSelector(
    (store: any) => store.books
  );
  const dispatch = useDispatch();
  const [dateRelease, setDateRelease] = useState(new Date());
  const [bookName, setBookName] = useState("");
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    dateRelease
  );
  let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
    dateRelease
  );
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    dateRelease
  );
  let formatDate = `${da}-${mo}-${ye}T00:00:00`;
  let booksFilteredDate = unfilteredBooks;
  if (dateRelease) {
    booksFilteredDate = unfilteredBooks.filter(
      (book: BookType) => book.release === formatDate
    );
  }
  let booksFilteredName = booksFilteredDate;
  if (bookName) {
    booksFilteredName = booksFilteredDate.filter((book: BookType) =>
      book.name.includes(bookName)
    );
  }
  const getMore = () => {
    setLoading(true);
    let length = unfilteredBooks.length;
    let page = Math.ceil(length / 10 + 1);
    let getMoreAction = asyncGetMore(page, "books", setLoading);
    dispatch(getMoreAction);
  };
  return (
    <>
      <Menu />
      <div className="booksFront">
        <Front
          img={booksImg}
          title={"books"}
          height={"120px"}
          position={"relative"}
        />
      </div>
      <div className="filterContainer">
        <div className="filter">
          <h1>filter</h1>
          <h2>release date:</h2>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={dateRelease}
            onChange={(date: any) => setDateRelease(date)}
          />
          <h2>name of a book:</h2>
          <input
            type="text"
            style={{ marginBottom: "30px" }}
            onInput={(e: any) => {
              setBookName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="booksContainer">
        {booksFilteredName.map((book: any) => (
          <Card key={book.url} data={book} />
        ))}
        {loading ? (
          <Preloader />
        ) : (
          <button onClick={getMore}>show more books</button>
        )}
      </div>
    </>
  );
}

export default Books;

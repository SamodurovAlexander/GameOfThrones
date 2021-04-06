import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Main from "./pages/main";
import Characters from "./pages/characters/characters";
import Books from "./pages/books/books";
import Houses from "./pages/houses/houses";
import Favorites from "./pages/favorites";
import Item from "./pages/item";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { asyncGetData } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetData());
  }, []);
  return (
    <HashRouter>
      <div
        style={{
          background: "black",
          color: "white",
        }}
      >
        <div></div>
        <Route path="/" exact component={Main} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/books" exact component={Books} />
        <Route path="/houses" exact component={Houses} />
        <Route path="/characters/:id" component={Item} />
        <Route path="/books/:id" component={Item} />
        <Route path="/houses/:id" component={Item} />
        <Route path="/favorites" exact component={Favorites} />
      </div>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import booksImg from "../../assets/images/book.png";
import {useSelector} from "react-redux";

function Books() {
    const books: any = useSelector((store:any) => store.books)
  return (
    <>
        <Menu/>
        <div style={{
            display:'flex',
            justifyContent: 'space-around',
            marginTop: '100px',
            position: "relative",
            height: '60vh',
            zIndex: 2
        }}>
            <Front img={booksImg} title={'books'} height={'120px'} position={'relative'}/>
        </div>

        <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'200px'
        }}>filter</h1>
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}>
            {books.map((book: any) => <Card
                key={book.url}
                data={book}/>)}
        </div>


    </>
  );
}

export default Books;
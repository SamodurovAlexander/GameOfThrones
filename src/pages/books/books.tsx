import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import booksImg from "../../assets/images/book.png";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";

function Books() {
    const [loading, setLoading] = useState(false);
    const books: any = useSelector((store:any) => store.books)
    const dispatch = useDispatch()
    const getMore = () =>{
        setLoading(true)
       let length = books.length
       let page = Math.ceil(length/10 + 1)
        let getMoreAction = asyncGetMore(page, 'books', setLoading)
        dispatch(getMoreAction)
    }
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
                data={book}/>)
            }
            {loading ? <Preloader/> : <button
                onClick={getMore}
                style={{background: 'white', border: 'none', fontSize: '20px'}}
            >show more characters
            </button>}

        </div>


    </>
  );
}

export default Books;
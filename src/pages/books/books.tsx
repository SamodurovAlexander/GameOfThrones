import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import booksImg from "../../assets/images/book.png";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";
import DatePicker from "react-datepicker";
require('react-datepicker/dist/react-datepicker.css');

function Books() {
    const [loading, setLoading] = useState(false);
    const unfilteredBooks: any = useSelector((store:any) => store.books)
    const dispatch = useDispatch()
    const [dateRelease, setDateRelease] = useState(new Date());
    const [bookName, setBookName] = useState();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateRelease);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(dateRelease);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateRelease);
    let formatDate = `${da}-${mo}-${ye}T00:00:00`
    let booksFilteredDate = unfilteredBooks
    if(dateRelease){
        booksFilteredDate = unfilteredBooks.filter((book:any)=> book.release === formatDate)
    }
    let booksFilteredName = booksFilteredDate
    if(bookName){
        booksFilteredName = booksFilteredDate.filter((book:any)=> book.name.includes(bookName))
    }
    const getMore = () =>{
        setLoading(true)
       let length = unfilteredBooks.length
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
            <div style={{
                        display:'grid',
                        justifyContent:'center',
                        marginBottom: '200px'
            }}>
                <div style={{
                        display:'grid',
                        justifyContent:'center',
                        marginTop:'200px',
                        border: '1px solid white',
                        textAlign: 'center',
                        width: '500px'
                    }}>
                    <h1 style={{
                        display:'grid',
                        justifyContent:'center',
                    }}>filter</h1>
                    <h2>release date:</h2>
                    <DatePicker dateFormat="dd/MM/yyyy" selected={dateRelease} onChange={(date:any) => setDateRelease(date)} />
                    <h2>name of a book:</h2>
                    <input type="text" style={{marginBottom:'30px'}} onInput={(e:any)=>{setBookName(e.target.value)}}/>
                </div>
            </div>
            <div style={{
                display:'grid',
                justifyContent:'center',
            }}>
            {booksFilteredName.map((book: any) => <Card
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
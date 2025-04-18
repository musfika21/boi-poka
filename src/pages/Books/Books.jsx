// import React, { Suspense, useEffect, useState } from 'react';
import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // way - 1
    // const [ allBooks, setAllBooks ] = useState([]);
    
    // useEffect(() =>{
    //     fetch('booksData.json')
    //         .then((res)=> res.json())
    //         .then((data)=> {
    //             setAllBooks(data)
    //         })
    // }, [])


    // way - 2 : evabe variable er moddhe promise kore then suspense use kore book component er moddhe obejct akare promise pathiye then react er use bebohar kore tar pore use kora jabe
    // const bookPromise = fetch('booksData.json').then((res => res.json()))

    return (
        <div>
            <h1 className='text-3xl font-medium text-center mt-20 mb-10'>Books</h1>
            {/* <Suspense fallback = {<span>Loading...</span>}>
                <Book data = {data}></Book>
            </Suspense> */}
            <div className='grid grid-cols-3 justify-around items-center gap-3'>
               {
                    data.map((singleBook) =>
                        <Book
                            key={singleBook.bookId} 
                            singleBook = {singleBook}
                        ></Book>
                    )
                }
            </div>
        </div>
    );
};

export default Books;
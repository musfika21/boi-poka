import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDb';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [ sort, setSort ] = useState('');

    const data = useLoaderData();
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log(storedBookData)
        const convertedStoredBooks = storedBookData.map((id) => parseInt(id))
        // console.log(convertedStoredBooks);
        const myReadList = data.filter((book) => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)

    }, [])

    const handleSort = (type) =>{
        setSort(type);

        if(type === "pages"){
            const sortedByPage = [...readList].sort((a, b)=> a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            // console.log(sortedByPage);
        }
        if( type === "ratings"){
            const sortedByRating = [...readList].sort((a, b)=> a.rating - b.rating)
            setReadList(sortedByRating);
        }
    }

    return (
        <div>
            <details className="dropdown flex items-center justify-center">
                <summary className="btn btn-success  ">Sort By : {sort? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read :{readList.length}</h2>
                    <div className=''>
                        {
                            readList.map((b) => <Book key={b.bookId} singleBook={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>my wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
// import React, { use } from 'react';
import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // upore abr bookPromise object destructure kore newa hoisilo
    // const data = use(bookPromise)
    // console.log(data);

    const { image, bookName, author, category, rating, tags, yearOfPublishing, bookId } = singleBook;

    return (
        <Link to = {`./bookDetails/${bookId}`}>
            <div className="card bg-white w-100 border border-gray-300">
                <figure className="p-10 bg-[#F3F3F3] m-5">
                    <img
                        className="w-2/5"
                        src={image} />
                </figure>
                <div className="card-body">

                    <div className="flex justify-center gap-5">
                        {
                            tags.map((tag, index) => <button key={index}>{tag}</button>)
                        }=""
                    </div>

                    <div className="flex gap-3">
                        <button className="btn bg-green-50 text-green-500 border-none rounded-2xl">Young Adult</button>

                        <button className="btn bg-green-50 text-green-500 border-none rounded-2xl">Identity</button>
                    </div>
                    <h2 className="card-title mt-2">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>By : {author}</p>
                    <div className="border border-dashed border-gray-300"></div>
                    <div className="flex ">
                        <p className="text-lg">{category}</p>
                        <div className="flex gap-3">
                            <p className="text-lg">{rating}</p>
                            <Star />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
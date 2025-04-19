import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilities/addToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const {id} = useParams();
    // console.log(id)  
    const bookId = parseInt(id);
    const data = useLoaderData();
    // console.log(data)
    const singleBook = data.find((book) => book.bookId === bookId);
    // console.log(singleBook)
    const { Id, bookName, author, image,review, rating, category, yearOfPublishing, publisher, totalPages, tags} = singleBook;

    const handleMarkAsRead = (id) =>{
        // 1.store with id
        // 2.where to store
        // 3.array of like a collection ( type of storing )
        // 4.if book already exist then show a alert
        // 5.if book not not exist then push in the collection or array


        // MySwal.fire({
        //     title: <p>Adding...</p>,
        //     didOpen: () => {
        //       // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        //       MySwal.showLoading()
        //     },
        //   }).then(() => {
        //     return MySwal.fire(<p>Added Successfully</p>)
        //   })


        toast("Added successfully");

        addToStoreDB(id);
    }
    
    return (
        <div className='flex justify-between gap-10 my-5'>
            <div className='bg-[#1313130D] p-15 flex-1 flex items-center justify-center rounded-4xl'>
                <img src= {image} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-6xl font-medium'>{bookName}</h2>
                <p className='text-xl my-3'>By: {author}</p>
                <div className='border border-gray-300 mb-3'></div>
                <p className='font-medium mb-3 text-xl'>{category}</p>
                <div className='border border-gray-300 mb-3'></div>
                <p className='text-[#131313B3] leading-8'><span className='font-medium'>Review: </span> {review}</p>
                <div className="flex items-center gap-5 my-4">
                    <span className='font-medium'>Tag</span>
                          {
                            tags.map((tag) => <button className="btn bg-green-50 text-green-500 border-none rounded-4xl">#{tag}</button>)
                        }
                </div>
                
                <div className='border border-gray-300 my-3'></div>
                <div className='flex gap-20 items-center leading-8'>
                    <div className='text-[#131313B3]'>
                        <p>Number of Pages: </p>
                        <p>Publisher: </p>
                        <p>Year of Publishing: </p>
                        <p>Rating: </p>
                    </div>
                    <div className='font-medium'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='my-3 flex gap-5'>
                    <button onClick={() => handleMarkAsRead(id)} className='btn'>Mark as Read</button>
                    <button className='btn bg-info'>Add To Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
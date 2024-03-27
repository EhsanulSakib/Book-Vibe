import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);

    const {bookName,author,image,review,totalPages,rating,category,tags,publisher, yearOfPublishing} = book;

    return (
        <div className="mt-4 md:mt-8 lg:mt-16 flex flex-col md:flex-row gap-4 ">
            <div className="left">
                <img src={image} alt=""/>
            </div>

            <div className="right w-full">
                <h2 className="font-extrabold font-playfair text-2xl md:text-5xl">{bookName}</h2>
                <h4 className="font-medium text-lg md:text-2xl py-6 border-b border-dashed">By: {author}</h4>
                <h4 className="font-medium text-lg md:text-2xl py-3 border-b border-dashed">{category}</h4>
                <p className="py-3 text-justify text-sm lg:text-base"><strong className="font-bold ">Review: </strong>{review}</p>
                <div className="text-sm lg:text-base py-2 md:py-4 border-b border-dashed flex gap-4 items-center">
                    <h4 className="font-extrabold">Tag</h4>
                    <h4 className="text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1">#{tags[0]}</h4>
                    <h4 className="text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1">#{tags[1]}</h4>
                </div>

                <div className="py-2 md:py-4 grid grid-cols-2 text-sm md:text-base gap-2">
                    <p>Number of Pages: </p>
                    <p className="font-bold">{totalPages}</p>
                    <p>Publisher: </p>
                    <p className="font-bold">{publisher}</p>
                    <p>Year of Publishing:</p>
                    <p className="font-bold">{yearOfPublishing}</p>
                    <p>Rating: </p>
                    <p className="font-bold">{rating}</p>
                </div>

                <div className="flex gap-4 mb-4 md:mb-8 lg:mb-16">
                    <button className="p-3 border-2 font-bold rounded-md cursor-pointer">Read</button>
                    <button className="p-3 border font-bold rounded-md text-white bg-[#50B1C9] cursor-pointer">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
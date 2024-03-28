import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import BookDetailsCard from "../BookDetailsCard/BookDetailsCard";

const ReadBooks = () => {
    const [readBooks,setReadBooks] = useState([])
    const books = useLoaderData();

    useEffect(() =>{
        const storedReadBooks = getStoredReadBooks();
        if (books.length > 0){
            const readedBooks = []
            for(const bookId of storedReadBooks){
                const book = books.find(book => book.bookId === bookId);
                console.log(book)
                if(book){
                    readedBooks.push(book)
                }
            }
            setReadBooks(readedBooks);
            console.log(readBooks)
        }
    },[])

    return (
        <div>
            {
                readBooks.map((book,idx) => <BookDetailsCard key={idx} book={book}></BookDetailsCard>)
            }
        </div>
    );
};

export default ReadBooks;
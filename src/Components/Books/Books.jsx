import Book from "../Book/Book";
import { useEffect, useState } from "react";

const Books = () => {
    const [books,setBooks] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div>
            <h3 className="mb-4 md:mb-8 lg:mb-12 text-center font-bold text-xl lg:text-4xl">Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;
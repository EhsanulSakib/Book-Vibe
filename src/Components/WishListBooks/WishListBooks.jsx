import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookDetailsCard from "../BookDetailsCard/BookDetailsCard";
import { getStoredWishList } from "../../Utility/LocalStorage";

const WishListBooks = () => {
    const [wishList, setWishList] = useState();
    const books = useLoaderData();

    useEffect(() => {
        const storedWishList = getStoredWishList();
        if (books.length > 0){
            const wishListBooks = []
            for(const bookId of storedWishList){
                const book = books.find(book => book.bookId === bookId);
                if(book){
                    wishListBooks.push(book)
                    console.log(book)
                }
            }
            setWishList(wishListBooks);
            console.log(wishList)
        }
    },[])

    return (
        <div>
            {
                wishList.map((book,idx) => <BookDetailsCard key={idx} book={book}></BookDetailsCard>)
            }
        </div>
    );
};

export default WishListBooks;
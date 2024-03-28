import { AiOutlineDown } from "react-icons/ai";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadBooks, getStoredWishList } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";

const ListedBooks = () => {
    const books = useLoaderData();

    const [readBooks,setReadBooks] = useState([])

    useEffect(() =>{
        const storedReadBooks = getStoredReadBooks();
        if (books.length > 0){
            const readedBooks = []
            for(const bookId of storedReadBooks){
                const book = books.find(book => book.bookId === bookId);
                if(book){
                    readedBooks.push(book)
                }
            }
            setReadBooks(readedBooks);
        }
    },[books])


    const [wishList, setWishList] = useState();

    useEffect(() => {
        const storedWishList = getStoredWishList();
        if (books.length > 0){
            const wishListBooks = []
            for(const bookId of storedWishList){
                const book = books.find(book => book.bookId === bookId);
                if(book){
                    wishListBooks.push(book)
                }
            }
            setWishList(wishListBooks);
        }
    },[books])

    const handleSort = flag =>{
        const list1 = getStoredReadBooks();
        const list2 = getStoredWishList();

        const readList = books?.filter(book=> list1.includes(book.bookId))
        const Wish = books?.filter(book=> list2.includes(book.bookId))

        if(flag === 0){
            const sortedRating1 = readList.sort((a, b) => b.rating - a.rating);
            const sortedRating2 = Wish.sort((a, b) => b.rating - a.rating);

            setReadBooks(sortedRating1)
            setWishList(sortedRating2)
        }
        else if(flag === 1){
            const sortedPages1 = list1.sort((a, b) => b.totalPages - a.totalPages);
            const sortedPages2 = list2.sort((a, b) => b.totalPages - a.totalPages);
            setReadBooks(books?.filter(book=> sortedPages1.includes(book.bookId)))
            setWishList(books?.filter(book=> sortedPages2.includes(book.bookId)))
        }
        else if(flag === 2){
            const sortedYear1 = list1.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            const sortedYear2 = list2.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadBooks(books?.filter(book=> sortedYear1.includes(book.bookId)))
            setWishList(books?.filter(book=> sortedYear2.includes(book.bookId)))
        }
    }

    return (
        <div>
            <h2 className="py-4 bg-[#1313130D] rounded-md my-2 md:my-4 font-extrabold text-center text-base md:text-xl">Books</h2>

            <div className="flex justify-center">
                <details className="dropdown">
                <summary className="m-1 btn bg-[#23BE0A] text-white font-bold">Sort By <AiOutlineDown></AiOutlineDown></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={()=>handleSort(0)}>Rating</a></li>
                    <li><a onClick={()=>handleSort(1)}>Number of Pages</a></li>
                    <li><a onClick={()=>handleSort(2)}>Published Year</a></li>
                </ul>
                </details>
            </div>

            <div className="flex gap-1 border-b">
                <Link to='/listed-books'><p className="border p-2 rounded-md  active:border-b-white">Read Books</p></Link>
                <Link to='/listed-books/wishlist'><p className="border p-2 rounded-md  active:border-b-white">Wishlist Books</p></Link>
            </div>

            <div>
                <Outlet context={{
                    readBooks, wishList
                }}></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;
import { AiOutlineDown } from "react-icons/ai";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
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
            const sortedPages1 = readList.sort((a, b) => b.totalPages - a.totalPages);
            const sortedPages2 = Wish.sort((a, b) => b.totalPages - a.totalPages);
            setReadBooks(sortedPages1)
            setWishList(sortedPages2)
        }
        else if(flag === 2){
            const sortedYear1 = readList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            const sortedYear2 = Wish.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadBooks(sortedYear1)
            setWishList(sortedYear2)
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


            <div className="nav flex gap-1 border-b">
                <NavLink to='/listed-books'><p className="border p-2 rounded-md ">Read Books</p></NavLink>
                <NavLink to='/listed-books/wishlist'><p className="border p-2 rounded-md ">Wishlist Books</p></NavLink>
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
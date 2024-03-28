import { AiOutlineDown } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    return (
        <div>
            <h2 className="py-4 bg-[#1313130D] rounded-md my-2 md:my-4 font-extrabold text-center text-base md:text-xl">Books</h2>

            <div className="flex justify-center">
                <details className="dropdown">
                <summary className="m-1 btn bg-[#23BE0A] text-white font-bold">Sort By <AiOutlineDown></AiOutlineDown></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a>Published Year</a></li>
                </ul>
                </details>
            </div>

            <div className="flex gap-1 border-b">
                <Link to='/listed-books/read-books'><p className="border p-2 rounded-md  active:border-b-white">Read Books</p></Link>
                <Link to='/listed-books/wishlist'><p className="border p-2 rounded-md  active:border-b-white">Wishlist Books</p></Link>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;
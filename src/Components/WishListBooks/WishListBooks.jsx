import { useOutletContext } from "react-router-dom";
import BookDetailsCard from "../BookDetailsCard/BookDetailsCard";
const WishListBooks = () => {
    const {wishList} = useOutletContext();

    return (
        <div>
            {
                wishList?.map((book,idx) => <BookDetailsCard key={idx} book={book}></BookDetailsCard>)
            }
        </div>
    );
};

export default WishListBooks;
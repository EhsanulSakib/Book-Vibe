import { useOutletContext } from "react-router-dom";
import BookDetailsCard from "../BookDetailsCard/BookDetailsCard";

const ReadBooks = () => {
    const {readBooks} = useOutletContext();

    return (
        <div>
            {
                readBooks?.map((book,idx) => <BookDetailsCard key={idx} book={book}></BookDetailsCard>)
            }
        </div>
    );
};

export default ReadBooks;
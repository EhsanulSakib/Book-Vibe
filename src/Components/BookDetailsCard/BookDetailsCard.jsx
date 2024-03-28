const BookDetailsCard = ({book}) => {
    const {bookId} = book;

    return (
        <div>
            <h2>{bookId}</h2>
        </div>
    );
};

export default BookDetailsCard;
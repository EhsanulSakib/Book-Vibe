import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();

    return (
        <div>
            <h3>Book Details of : {id}</h3>
        </div>
    );
};

export default BookDetails;
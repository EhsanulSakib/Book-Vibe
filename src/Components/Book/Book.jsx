import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Book = ({book}) => {
    const {bookId,image,tags,bookName,author,category,rating} = book;

    const navigate  = useNavigate(bookId);
    const handleDetails = () =>{
        navigate(`/book/${bookId}`)
    }
    return (
        <div onClick={() => handleDetails(bookId)} className=" mb-4 md:mb-8 lg:mb-16 cursor-pointer">
            <div className="card card-compact h-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="book" className="h-40 lg:h-60"/></figure>
            <div className="card-body">
                <div className="flex gap-4">
                    <h4 className="p-1 text-center text-[#23BE0A] bg-[#23BE0A0D] rounded-md">{tags[0]}</h4>
                    <h4 className="p-1 text-center text-[#23BE0A] bg-[#23BE0A0D] rounded-md">{tags[1]}</h4>
                </div>
                <div>
                    <div className="h-28">
                        <h2 className="card-title">{bookName}</h2>
                        <p>By: {author}</p>
                    </div>
                    <div className="p-1 mt-2 border-t border-dashed flex justify-between">
                        <h4>{category}</h4>
                        <h4 className="flex flex-row gap-1 items-center">{rating} <AiOutlineStar></AiOutlineStar></h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Book;
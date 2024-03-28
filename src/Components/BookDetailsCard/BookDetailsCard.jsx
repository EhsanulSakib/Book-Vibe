import { GrLocation } from "react-icons/gr";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BookDetailsCard = ({book}) => {
    const {bookId,image,bookName,author,category,tags,totalPages,publisher,yearOfPublishing,rating} = book||{};

    const navigate = useNavigate(bookId)
    const handleDetails = () =>{
        navigate(`/book/${bookId}`)
    }
    return (
        <div>
            <div className="my-2 md:my-8 hero border rounded-md  shadow-md">
            <div className="hero-content flex-col w-full justify-start lg:flex-row">
                <img src={image} className=" h-72 w-56 rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-2xl md:text-5xl font-bold">{bookName}</h1>
                <h2 className="mt-1 md:mt-2 text-base md:text-2xl">By: {author}</h2>
                
                <div className="text-sm md:text-xl my-2 md:my-4 flex flex-col md:flex-row gap-4 md:items-center">
                    <div className="flex gap-3 md:items-center">
                        <h2 className=" font-bold">Tag</h2>
                        <h2 className="p-1 text-[#23BE0A] bg-[#23BE0A0D] rounded-md">#{tags&&tags[0]||''}</h2>
                        <h2 className="p-1 text-[#23BE0A] bg-[#23BE0A0D] rounded-md">#{tags&&tags[1]||''}</h2>
                    </div>
                    <div>
                        <h2 className="flex gap-1 items-center"><GrLocation className="text-2xl"/>Year of Publishing: {yearOfPublishing}</h2>
                    </div>
                </div>


                <div className="mb-2 md:mb-4 flex flex-col md:flex-row gap-4 text-sm md:text-xl">
                    <h2 className="flex gap-2 items-center"><MdOutlinePeopleOutline className="text-2xl"/>Publisher: {publisher}</h2>
                    <h2 className="flex gap-2 items-center"><AiOutlineFile  className="text-2xl"/> Page: {totalPages}</h2>
                </div>

                <div className="pt-2 md:pt-4 border-t-2 border-dashed flex gap-4 md:gap-8 text-sm md:text-xl">
                    <h2 className="p-2 rounded-lg bg-[#328EFF26] text-[#328EFF]">Category: {category}</h2>
                    <h2 className="p-2 rounded-lg bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</h2>
                    <button className="px-4 py-2 rounded-lg bg-[#23BE0A] text-white cursor-pointer" onClick={handleDetails}>View Details</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookDetailsCard;
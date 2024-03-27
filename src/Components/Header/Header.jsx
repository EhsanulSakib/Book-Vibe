import {useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const showList = () =>{
        navigate("/books");
    }
    return (
        <div className="bg-[#1313130D] rounded-md my-4 lg:my-12">
            <div className="flex justify-between items-center p-2 md:p-8 lg:p-12 lg:gap-24">
                <div className="left w-2/3 ">
                    <h2 className="font-playfair font-bold text-2xl md:text-4xl lg:text-6xl">Books to freshen up your bookshelf</h2>
                    <button className="btn bg-[#23BE0A] text-white font-semibold mt-2 md:mt-4 lg:mt-8 text-xs md:text-sm lg:text-base" onClick={showList}>View The List</button>
                </div>
                <div className="right flex justify-end">
                    <img src="/public/cover.png" alt="book" className="w-5/6 lg:w-full"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-4 lg:mt-12 flex flex-col gap-4 items-center justify-center text-center">
            <h2 className="text-2xl font-bold">Opps!! Page Not Found</h2>
            <Link to="/" className=" w-1/8 rounded-lg m-auto mt-6 p-4 bg-[#23BE0A] text-white ">Go Back</Link>
        </div>
    );
};

export default ErrorPage;
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="w-11/12 xl:max-w-[1420px] m-auto font-work-sans">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar px-0 bg-base-100">
            <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="nav menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/books">Listed Books</NavLink> </li>
                    <li><NavLink to="/read">Pages to Read</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><a className="btn w-full bg-[#23BE0A] text-white mr-2">Sign In</a></li>
                    <li><a className="btn w-full bg-[#59C6D2] text-white">Sign Up</a></li>
                </ul>
            </div>
            <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="nav menu menu-horizontal px-1">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">Listed Books</NavLink> </li>
                <li><NavLink to="/read">Pages to Read</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            </div>
            <div className="navbar-end hidden lg:flex justify-end">
            <a className="btn bg-[#23BE0A] text-white mr-2">Sign In</a>
            <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
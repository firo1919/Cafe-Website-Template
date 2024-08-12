import React from "react";
import Nav from "./Nav";
import {Link, animateScroll as scroll} from "react-scroll";

function Header() {
    return (
        <header className=" py-10 px-4 md:px-16 lg:px-24 flex justify-between items-center h-12 bg-white">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => {scroll.scrollToTop()}}>
                <div className="">
                    <img src="images/Logo.png" alt="LOGO" />
                </div>
                <p className="font-extrabold">
                    FOOD<span className="text-orange font-extrabold">BOX</span>
                </p>
            </div>
            <div className=" lg:flex gap-3 items-center justify-evenly p-3 hidden">
                <Link className="cursor-pointer p-4 transition-colors duration-500 hover:bg-orange-medium-light hover:text-orange rounded-3xl " activeClass="active" spy={true} offset={-75} to="home" smooth={true} duration={500}>
                    Home
                </Link>
                <Link className="cursor-pointer p-4 transition-colors duration-500 hover:bg-orange-medium-light rounded-3xl hover:text-orange" activeClass="active" spy={true}  offset={-200}  to="menu" smooth={true} duration={500}>
                    Menu
                </Link>
                <Link className="cursor-pointer p-4 transition-colors duration-500 hover:bg-orange-medium-light rounded-3xl hover:text-orange" activeClass="active" spy={true}  offset={-75}  to="services" smooth={true} duration={500}>
                    Services
                </Link>
                <Link className="cursor-pointer p-4 transition-colors duration-500 hover:bg-orange-medium-light rounded-3xl hover:text-orange" activeClass="active" spy={true}  offset={-75}  to="reviews" smooth={true} duration={500}>
                    Reviews
                </Link>
                <Link className="cursor-pointer p-4 transition-colors duration-500 hover:bg-orange-medium-light rounded-3xl  hover:text-orange" activeClass="active" spy={true} offset={50}  to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </div>
            <div className="flex gap-3">
                <div className="bg-black p-1.5 rounded-full cursor-pointer">
                    <img src="images/search.svg" alt="" />
                </div>
                <div className="bg-black p-1.5 rounded-full cursor-pointer">
                    <img src="images/shopping.svg" alt="" />
                </div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;

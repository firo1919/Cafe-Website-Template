import React from "react";
import Nav from "./Nav";

function Header() {
    return (
        <header className=" py-10 px-4 md:px-16 lg:px-24 flex justify-between items-center h-12 sticky top-0 z-10 bg-white">
            <div className="flex items-center gap-3">
                <div className="">
                    <img src="images/Logo.png" alt="LOGO" />
                </div>
                <p className="font-extrabold">
                    FOOD<span className="text-orange font-extrabold">BOX</span>
                </p>
            </div>
            <div className=" lg:flex gap-3 items-center justify-evenly p-3 hidden">
                <a href="#home" className="p-4 hover:bg-orange-medium-light hover:text-orange rounded-3xl ">
                    Home
                </a>
                <a className="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#menu">
                    Menu
                </a>
                <a className="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#services">
                    Services
                </a>
                <a className="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#reviews">
                    Reviews
                </a>
                <a className="p-4 hover:bg-orange-medium-light rounded-3xl  hover:text-orange" href="#contact">
                    Contact
                </a>
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

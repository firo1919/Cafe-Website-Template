import React, { useState } from "react";
import {Link} from "react-scroll";

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsNavOpen((prev) => true)} className="sm:hidden bg-black px-1.5 rounded-full cursor-pointer text-white text-2xl">
                &#8801;
            </div>
            <nav onClick={() => setIsNavOpen((prev) => false)} className={isNavOpen ? "fixed top-0 left-0 right-0 h-screen z-20 transition-all duration-300 ease-in-out" : "hidden"}>
                <div className="bg-orange-light shadow-2xl py-12 items-center flex flex-col fixed top-0 left-32 right-0 h-full ">
                    <div className=" bg-black px-2 rounded-full cursor-pointer text-white text-2xl">X</div>
                    <Link onClick={() => setIsNavOpen((prev) => false)} className="cursor-pointer p-4  " to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link onClick={() => setIsNavOpen((prev) => false)} className="cursor-pointer p-4 " to="menu" smooth={true} duration={500}>
                        Menu
                    </Link>
                    <Link onClick={() => setIsNavOpen((prev) => false)} className="cursor-pointer p-4 " to="services" smooth={true} duration={500}>
                        Services
                    </Link>
                    <Link onClick={() => setIsNavOpen((prev) => false)} className="cursor-pointer p-4 " to="reviews" smooth={true} duration={500}>
                        Reviews
                    </Link>
                    <Link onClick={() => setIsNavOpen((prev) => false)} className="cursor-pointer p-4 " to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Nav;

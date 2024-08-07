import React, { useState } from "react";
import {Link} from "react-scroll";

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsNavOpen((prev) => !prev)} className="sm:hidden bg-black px-1.5 rounded-full cursor-pointer text-white text-2xl">
                &#8801;
            </div>
            <nav onClick={() => setIsNavOpen((prev) => false)} className={isNavOpen ? "absolute top-0 left-0 right-0 h-screen z-20" : "hidden"}>
                <div className="bg-orange-light py-12 items-center flex flex-col h-full w-1/2 left-40 float-right ">
                    <div className=" bg-black px-2 rounded-full cursor-pointer text-white text-2xl">X</div>
                    <Link className="cursor-pointer p-4  " to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link className="cursor-pointer p-4 " to="menu" smooth={true} duration={500}>
                        Menu
                    </Link>
                    <Link className="cursor-pointer p-4 " to="services" smooth={true} duration={500}>
                        Services
                    </Link>
                    <Link className="cursor-pointer p-4 " to="reviews" smooth={true} duration={500}>
                        Reviews
                    </Link>
                    <Link className="cursor-pointer p-4 " to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Nav;

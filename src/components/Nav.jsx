import React, { useState } from "react";

function Nav() {
    const [isNavOpen,setIsNavOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsNavOpen(prev => (!prev))} className="sm:hidden bg-black px-1.5 rounded-full cursor-pointer text-white text-2xl">
                &#8801;
            </div>
            <nav onClick={() => setIsNavOpen(prev => (false))} className={isNavOpen ? "absolute top-0 left-0 right-0 h-screen z-20" : "hidden"}>
                <div className="bg-orange-light py-12 items-center flex flex-col h-full w-1/2 left-40 float-right ">
                    <div className=" bg-black px-2 rounded-full cursor-pointer text-white text-2xl">
                        X
                    </div>
                    <a  className="p-4 hover:bg-orange-medium-light hover:text-orange " href="#home">
                        Home
                    </a>
                    <a  className="p-4 hover:bg-orange-medium-light hover:text-orange" href="#menu">
                        Menu
                    </a>
                    <a  className="p-4 hover:bg-orange-medium-light hover:text-orange" href="#services">
                        Services
                    </a>
                    <a  className="p-4 hover:bg-orange-medium-light hover:text-orange" href="#reviews">
                        Reviews
                    </a>
                    <a  className="p-4 hover:bg-orange-medium-light  hover:text-orange" href="#contact">
                        Contact
                    </a>
                </div>
                
            </nav>
        </>
    );
}

export default Nav;

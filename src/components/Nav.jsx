import React from "react";

function Nav() {
    return (
        <nav>
            <a  class="p-4 hover:bg-orange-medium-light hover:text-orange rounded-3xl " href="#home">
                Home
            </a>
            <a class="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#menu">
                Menu
            </a>
            <a class="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#services">
                Services
            </a>
            <a class="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#reviews">
                Reviews
            </a>
            <a class="p-4 hover:bg-orange-medium-light rounded-3xl  hover:text-orange" href="#contact">
                Contact
            </a>
        </nav>
    );
}

export default Nav;

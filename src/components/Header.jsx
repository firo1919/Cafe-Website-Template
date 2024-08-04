import React from 'react';
import Nav from "./Nav";

function Header() {
  return (
    <header class=" py-10 px-4 md:px-16 lg:px-24 flex justify-between items-center h-12 sticky top-0 z-10 bg-white">
            <div class="flex items-center gap-3">
                <div class="">
                    <img src="images/Logo.png" alt="LOGO" />
                </div>
                <p class="font-extrabold">FOOD<span class="text-orange font-extrabold">BOX</span></p>
            </div>
            <div class=" lg:flex gap-3 items-center justify-evenly p-3 hidden">
                <a href="#home" class="p-4 hover:bg-orange-medium-light hover:text-orange rounded-3xl ">Home</a>
                <a class="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#menu">Menu</a>
                <a class="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#services">Services</a>
                <a class="p-4 hover:bg-orange-medium-light rounded-3xl hover:text-orange" href="#reviews">Reviews</a>
                <a class="p-4 hover:bg-orange-medium-light rounded-3xl  hover:text-orange" href="#contact">Contact</a>
            </div>
            <div class="flex gap-3">
                <div class="bg-black p-1.5 rounded-full cursor-pointer"><img src="images/search.svg" alt="" /></div>
                <div class="bg-black p-1.5 rounded-full cursor-pointer"><img src="images/shopping.svg" alt="" /></div>
            </div>
    </header>
  )
}

export default Header
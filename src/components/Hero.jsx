import React from "react";

function Hero() {
    return (
        <div class="container mx-auto px-4 md:px-10 lg:justify-between lg:px-16 flex flex-col md:flex-row  mt-8" id="home">
            <div class="w-96 ">
                <div class="bg-orange-medium-light rounded-full w-44 p-4 my-4 text-orange">
                    Feast Your Senses
                </div>
                <div class="font-extrabold my-2 lg:my-4 text-3xl lg:text-5xl">
                    Bon Appétit:
                </div>
                <div class="font-extrabold my-2 lg:my-4 text-3xl lg:text-5xl text-orange">
                    Savor Gastronomic
                </div>
                <div class="font-extrabold my-2 lg:my-4 text-3xl lg:text-5xl">
                    Creations
                </div>
                <div class="text-gray-400 text-lg my-5 lg:my-10 lg:w-[500px]">
                    Your ultimate destination for all things food! Explore our
                    extensive collection of mouthwatering recipes.
                </div>
                <div class="flex justify-between">
                    <div class="">
                        <button class="bg-orange relative text-white p-3 my-4 w-44 rounded-full">
                            ORDER NOW
                            <div class="absolute bg-orange animate-ping w-full h-full rounded-full bottom-1"></div>
                        </button>
                    </div>

                    <button class="bg-black text-white p-3 my-4 w-44 rounded-full">WATCH DEMO</button>
                </div>
            </div>
            <div class="h-full">
                <img src="images/HeroImg-W5EhG1Hl.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;

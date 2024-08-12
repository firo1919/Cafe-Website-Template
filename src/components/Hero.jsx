import TextAnimation from "./TextAnimation";
function Hero() {
    return (
        <div className=" container mx-auto px-4 md:px-10 lg:justify-between lg:px-16 flex flex-col md:flex-row  mt-8" id="home" data-aos="fade-up">
            <div className="md:w-1/2 lg:w-full ">
                <div className="bg-orange-medium-light rounded-full w-44 p-4 my-4 text-orange">
                    Feast Your Senses
                </div>
                <div className="font-extrabold my-2 lg:my-4 text-3xl lg:text-6xl">
                    Bon Appétit:
                </div>
                <div className="font-extrabold my-2 lg:my-4 text-3xl lg:text-6xl text-orange">
                    <TextAnimation />
                </div>
                <div className="font-extrabold my-2 lg:my-4 text-3xl lg:text-6xl">
                    Creations
                </div>
                <div className="text-gray-400 text-lg my-5 lg:my-10 lg:w-[500px]">
                    Your ultimate destination for all things food! Explore our
                    extensive collection of mouthwatering recipes.
                </div>
                <div className="flex justify-between md:justify-start md:gap-4">
                    <div className="">
                        <button className="bg-orange relative text-white p-3 my-4 w-44 rounded-full">
                            ORDER NOW
                            <div className="absolute bg-orange animate-ping w-full h-full rounded-full bottom-1"></div>
                        </button>
                    </div>

                    <button className="bg-black text-white p-3 my-4 w-44 rounded-full">WATCH DEMO</button>
                </div>
            </div>
            <div>
                <img className="w-full" src="images/HeroImg-W5EhG1Hl.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;

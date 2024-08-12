import React from "react";

function Footer() {
    return (
        <footer  className="container mx-auto px-4 md:px-10 lg:px-16" id="contact" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
            <div className="grid grid-cols-1 md:grid-cols-4 my-14 gap-8">
                <div className="">
                    <div className="flex items-center gap-3 pb-4">
                        <div className="">
                            <img src="images/Logo.png" alt="LOGO" />
                        </div>
                        <p className="font-extrabold">
                            FOOD
                            <span className="text-orange font-extrabold">
                                BOX
                            </span>
                        </p>
                    </div>
                    <div className="">
                        Your ultimate destination for all things food! Explore
                        our extensive collection of mouthwatering recipes.
                    </div>
                </div>
                <div className="">
                    <div className="font-extrabold text-2xl pb-6">Menu</div>
                    <div className="flex flex-col">
                        <a href="">About</a>
                        <a href="">Menu</a>
                        <a href="">Event</a>
                        <a href="">Offer</a>
                    </div>
                </div>
                <div className="">
                    <div className="font-extrabold text-2xl pb-6">
                        Information
                    </div>
                    <div className="flex flex-col">
                        <a href="">Contact</a>
                        <a href="">Order & Returns</a>
                        <a href="">Videos</a>
                        <a href="">Reservation</a>
                    </div>
                </div>
                <div className="">
                    <div className="font-extrabold text-2xl pb-6">Address</div>
                    <div className="flex flex-col">
                        <a href="">1234 Bay Ln, City</a>
                        <a href="">Statename, 23416</a>
                        <a href="">9:00 Am - 12:00 PM</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex gap-4 p-4">
                    <div className="bg-orange-medium-light p-3 rounded-full">
                        <img src="images/facebook.svg" alt="" />
                    </div>
                    <div className="bg-orange-medium-light p-3 rounded-full">
                        <img src="images/instagram.svg" alt="" />
                    </div>
                    <div className="bg-orange-medium-light p-3 rounded-full">
                        <img src="images/twitter-x.svg" alt="" />
                    </div>
                    <div className="bg-orange-medium-light p-3 rounded-full">
                        <img src="images/tiktok.svg" alt="" />
                    </div>
                </div>
                <div className="text-gray-400 p-4">
                    Copyright (c) 2024 sitename | All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;

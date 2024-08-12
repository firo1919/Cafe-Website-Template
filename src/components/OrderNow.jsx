import React from "react";

function OrderNow() {
    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-16 flex mb-56 md:gap-12 flex-col md:flex-row" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
            <div className="relative w-full  md:scale-75 lg:scale-90 order-last md:order-first">
                <img src="images/imattsmart-8jKUy5SrR-o-unsplash.jpg" alt="" className="h-72 md:h-96 rounded-3xl object-fill" />
                <img src="images/melissa-walker-horn-wrPxb-FDp1c-unsplash.jpg" alt="" className="absolute left-40 md:left-52 top-44 h-72 md:h-96 rounded-3xl" />
            </div>
            <div className="w-full md:w-2/3 lg:w-full">
                <div className="font-extrabold my-4 text-3xl lg:text-5xl">Order Your Best</div>
                <div className="font-extrabold my-4 text-3xl lg:text-5xl">Food Any Time</div>
                <div className="text-gray-400 text-lg my-10">Whether you're a seasoned chef or a kitchen novice, our user-friendly platform caters to all levels of expertise, ensuring everyone can savor the joy of creating delicious meals.</div>
                <div className="flex place-content-end animate-bounce">
                    <button className="bg-orange text-white p-3 my-4 w-44 rounded-full">ORDER NOW</button>
                </div>
            </div>
        </div>
    );
}

export default OrderNow;

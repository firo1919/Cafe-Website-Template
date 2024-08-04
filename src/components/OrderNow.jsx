import React from "react";

function OrderNow() {
    return (
        <div class="container mx-auto px-4 md:px-10 lg:px-16 flex mb-56 md:gap-12 flex-col md:flex-row">
            <div class="relative w-full  md:scale-75 lg:scale-90 order-last md:order-first">
                <img
                    src="images/imattsmart-8jKUy5SrR-o-unsplash.jpg"
                    alt=""
                    class="h-72 md:h-96 rounded-3xl object-fill"
                />
                <img
                    src="images/melissa-walker-horn-wrPxb-FDp1c-unsplash.jpg"
                    alt=""
                    class="absolute left-40 md:left-52 top-44 h-72 md:h-96 rounded-3xl"
                />
            </div>
            <div class="w-full md:w-2/3 lg:w-full">
                <div class="font-extrabold my-4 text-3xl lg:text-5xl">
                    Order Your Best
                </div>
                <div class="font-extrabold my-4 text-3xl lg:text-5xl">
                    Food Any Time
                </div>
                <div class="text-gray-400 text-lg my-10">
                    Whether you're a seasoned chef or a kitchen novice, our
                    user-friendly platform caters to all levels of expertise,
                    ensuring everyone can savor the joy of creating delicious
                    meals.
                </div>
                <div class="flex place-content-end animate-bounce">
                    <button class="bg-orange text-white p-3 my-4 w-44 rounded-full">
                        ORDER NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderNow;

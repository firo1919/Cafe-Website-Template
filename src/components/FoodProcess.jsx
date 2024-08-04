import React from "react";

function FoodProcess() {
    return (
        <div class="container mx-auto px-4 md:px-10 lg:px-16 mb-24" id="services">
            <div class="text-center font-extrabold text-4xl py-12">
                Our Food Process
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="flex flex-col items-center justify-center gap-8">
                    <div class="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src="images/prepare.png" alt="" class="h-40" />
                    </div>
                    <p class="text-center font-bold">Prepare</p>
                    <p class="text-gray-400 text-center">
                        Restaurants offer a variety of dining experiences
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center gap-8">
                    <div class="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src="images/packaging.png" alt="" class="h-40" />
                    </div>
                    <p class="text-center font-bold">Package</p>
                    <p class="text-gray-400 text-center">
                        Catering companies specialize in providing food and
                        beverage services
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center gap-8">
                    <div class="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src="images/packaging.png" alt="" class="h-40" />
                    </div>
                    <p class="text-center font-bold">Delivery</p>
                    <p class="text-gray-400 text-center">
                        Meal delivery services deliver freshly prepared meals
                        directly to customers
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FoodProcess;

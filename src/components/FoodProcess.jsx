import React from "react";

function FoodProcess() {
    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-16 mb-24" id="services">
            <div className="text-center font-extrabold text-4xl py-12">Our Food Process</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src="images/prepare.png" alt="" className="h-40" />
                    </div>
                    <p className="text-center font-bold">Prepare</p>
                    <p className="text-gray-400 text-center">Restaurants offer a variety of dining experiences</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src="images/packaging.png" alt="" className="h-40" />
                    </div>
                    <p className="text-center font-bold">Package</p>
                    <p className="text-gray-400 text-center">Catering companies specialize in providing food and beverage services</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src="images/packaging.png" alt="" className="h-40" />
                    </div>
                    <p className="text-center font-bold">Delivery</p>
                    <p className="text-gray-400 text-center">Meal delivery services deliver freshly prepared meals directly to customers</p>
                </div>
            </div>
        </div>
    );
}

export default FoodProcess;

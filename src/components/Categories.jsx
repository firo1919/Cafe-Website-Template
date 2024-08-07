import React from "react";
import AOS from "aos";
import { useEffect } from "react";

function Categories() {

    useEffect(() => {
        AOS.init(
        );
    }
    ,[]);
    return (
        <div className=" container mx-auto px-4 md:px-10 lg:px-16 my-24" id="menu" data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
            <div className="text-center font-extrabold text-4xl pb-12">Top Categories</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-6">
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src="images/shine-fast-food-combo-1.png" alt="" />
                    </div>
                    <p>Fast Food</p>
                </div>
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src="images/dizzy-plate-with-vegetables.png" alt="" />
                    </div>
                    <p>Salad</p>
                </div>
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src="images/glazy-sushi-set.png" alt="" />
                    </div>
                    <p>Chinese</p>
                </div>
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src="images/fabulous-wine-tasting.png" alt="" />
                    </div>
                    <p>Drinks</p>
                </div>
            </div>
        </div>
    );
}

export default Categories;

import React from "react";

function Download() {
    return (
        <div class="container mx-auto px-4 md:px-10 lg:px-16 my-52">
            <div class="bg-black lg:relative rounded-3xl lg:p-10 md:p-0 p-10 flex flex-col lg:flex-row items-center">
                <div class="flex flex-col md:flex-row gap-4 md:py-12">
                    <div class="flex flex-row md:flex-col items-center gap-6 cursor-pointer">
                        <p class="text-white font-bold  text-4xl lg:text-2xl">
                            Download IOS
                        </p>
                        <img src="images/appstore.png" alt="" />
                    </div>
                    <div class="flex flex-row md:flex-col items-center gap-6  text-4xl lg:text-2xl cursor-pointer">
                        <p class="text-white font-bold">Download Android</p>
                        <img src="images/playstore.png" alt="" />
                    </div>
                </div>
                <div class="lg:absolute left-96  lg:w-8/12">
                    <img src="images/download.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Download;

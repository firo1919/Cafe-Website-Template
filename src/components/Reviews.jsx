import React from "react";

function Reviews() {
    return (
        <div className="mb-14" id="reviews" data-aos="fade-up">
            <div className="text-center font-extrabold text-4xl py-12">Customer Reviews</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 px-16 lg:px-36 p-12 bg-orange-medium-light">
                <div className="bg-orange-light p-4 rounded-3xl" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                    <div className="flex justify-center">
                        <img src="images/zoe-fernandez--zqoE7jnQgw-unsplash.jpg" alt="" className="p-6 w-40 h-40 rounded-full" />
                    </div>
                    <p className="pb-6">Amazing food and great atmosphere! The staff was super friendly, and the dessert was to die for. Definitely coming back!</p>
                    <p className="font-bold">Alice T.</p>
                </div>
                <div className="bg-orange-light p-4 rounded-3xl" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                    <div className="flex justify-center">
                        <img src="images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg" alt="" className="p-6 w-40 h-40 rounded-full" />
                    </div>
                    <p className="pb-6">Good place for a casual dinner. The burgers are delicious, but the service could be a bit faster. Overall, a solid experience.</p>
                    <p className="font-bold">John D.</p>
                </div>
                <div className="bg-orange-light p-4 rounded-3xl" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                    <div className="flex justify-center rounded-full">
                        <img src="images/podmatch-UpiF461EAHU-unsplash.jpg" alt="" className="p-6 w-40 h-40 rounded-full" />
                    </div>
                    <p className="pb-6">Loved the ambiance! The pasta was perfectly cooked, and the wine selection was excellent. Highly recommend for a date night.</p>
                    <p className="font-bold">Mike B.</p>
                </div>
                <div className="bg-orange-light p-4 rounded-3xl" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                    <div className="flex justify-center rounded-full">
                        <img src="images/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg" alt="" className="p-6 w-40 h-40 rounded-full" />
                    </div>
                    <p className="pb-6">Decent food, but nothing spectacular. Prices are reasonable, and the portions are generous. It's a good spot for a quick bite.</p>
                    <p className="font-bold">Sam K.</p>
                </div>
                <div className="bg-orange-light p-4 rounded-3xl" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                    <div className="flex justify-center rounded-full">
                        <img src="images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg" alt="" className="p-6 w-40 h-40 rounded-full" />
                    </div>
                    <p className="pb-6">The sushi was fresh and flavorful, and the presentation was beautiful. The staff made us feel very welcome. A must-visit for sushi lovers!</p>
                    <p className="font-bold">Emily R.</p>
                </div>
                <div className="bg-orange-light p-4 rounded-3xl" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                    <div className="flex justify-center rounded-full">
                        <img src="images/leio-mclaren-L2dTmhQzx4Q-unsplash.jpg" alt="" className="p-6 w-40 h-40 rounded-full" />
                    </div>
                    <p className="pb-6">Had a fantastic brunch here. The eggs Benedict was spot on, and the coffee was strong and tasty. Will definitely be back to try more!</p>
                    <p className="font-bold">Vincent</p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;

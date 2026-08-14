import prepareImage from '@/assets/images/prepare.webp';
import packagingImage from '@/assets/images/packaging.webp';

function FoodProcess() {
    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-16 mb-24 " id="services" data-aos="fade">
            <div className="text-center font-extrabold text-4xl py-12">Our Food Process</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center justify-center gap-8" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000">
                    <div className="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src={prepareImage} alt="Prepare" className="h-40" loading="lazy" />
                    </div>
                    <p className="text-center font-bold">Prepare</p>
                    <p className="text-gray-400 text-center">Restaurants offer a variety of dining experiences</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8" data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000">
                    <div className="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src={packagingImage} alt="Package" className="h-40" loading="lazy" />
                    </div>
                    <p className="text-center font-bold">Package</p>
                    <p className="text-gray-400 text-center">Catering companies specialize in providing food and beverage services</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8" data-aos="fade-right" data-aos-delay="350" data-aos-duration="1000">
                    <div className="bg-orange-medium-light p-4 w-30 h-30 rounded-full">
                        <img src={packagingImage} alt="Delivery" className="h-40" loading="lazy" />
                    </div>
                    <p className="text-center font-bold">Delivery</p>
                    <p className="text-gray-400 text-center">Meal delivery services deliver freshly prepared meals directly to customers</p>
                </div>
            </div>
        </div>
    );
}

export default FoodProcess;

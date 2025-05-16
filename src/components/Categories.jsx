import fastFoodImage from "../images/shine-fast-food-combo-1.png";
import saladImage from "../images/dizzy-plate-with-vegetables.png";
import chineseImage from "../images/glazy-sushi-set.png";
import drinksImage from "../images/fabulous-wine-tasting.png";

function Categories() {
    return (
        <div className=" container mx-auto px-4 md:px-10 lg:px-16 my-24" id="menu" data-aos="fade">
            <div className="text-center font-extrabold text-4xl pb-12">Top Categories</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-6">
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src={fastFoodImage} alt="Fast Food" />
                    </div>
                    <p>Fast Food</p>
                </div>
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src={saladImage} alt="Salad" />
                    </div>
                    <p>Salad</p>
                </div>
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src={chineseImage} alt="Chinese" />
                    </div>
                    <p>Chinese</p>
                </div>
                <div className="border rounded-3xl flex flex-col items-center justify-center gap-8 p-16 hover:scale-110 hover:bg-orange transition-all duration-500" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000">
                    <div className="bg-orange-medium-light p-4 w-40 h-40 rounded-full">
                        <img src={drinksImage} alt="Drinks" />
                    </div>
                    <p>Drinks</p>
                </div>
            </div>
        </div>
    );
}

export default Categories;

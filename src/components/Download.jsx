import appStoreImage from '../images/appstore.png';
import playStoreImage from '../images/playstore.png';
import downloadImage from '../images/download.png';

function Download() {
    return (
        <div className="container  mx-auto px-4 md:px-10 lg:px-16 sm:my-52" data-aos="fade-up">
            <div className="bg-black lg:relative rounded-3xl lg:p-10 md:p-0 p-10 flex flex-col lg:flex-row items-center">
                <div className="flex flex-col md:flex-row gap-4 md:py-12">
                    <div className="flex flex-row md:flex-col items-center gap-6 cursor-pointer">
                        <p className="text-white font-bold  text-4xl lg:text-2xl">Download IOS</p>
                        <img src={appStoreImage} alt="App Store" />
                    </div>
                    <div className="flex flex-row md:flex-col items-center gap-6  text-4xl lg:text-2xl cursor-pointer">
                        <p className="text-white font-bold">Download Android</p>
                        <img src={playStoreImage} alt="Play Store" />
                    </div>
                </div>
                <div className="lg:absolute left-96  lg:w-8/12" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                    <img src={downloadImage} alt="Download" />
                </div>
            </div>
        </div>
    );
}

export default Download;

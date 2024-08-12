import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Download from "./components/Download";
import OrderNow from "./components/OrderNow";
import FoodProcess from "./components/FoodProcess";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import AOS from 'aos';
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init({
            easing:"ease-in-out",
            duration:"1000",
            mirror:"true"
        });
    },[]);
    return(
        <>
            <Header />
            <Hero />
            <Categories />
            <OrderNow />
            <FoodProcess />
            <Reviews />
            <Download />
            <Footer />
        </>
    );
}

export default App;

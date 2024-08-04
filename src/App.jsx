import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Download from "./components/Download";
import OrderNow from "./components/OrderNow";
import FoodProcess from "./components/FoodProcess";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
function App() {
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

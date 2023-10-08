import About from "../About/About";
import Banner from "../Banner/Banner";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="mt-10">
                <About />
            </div>
            <Service />
            <Portfolio />
        </div>
    );
};

export default Home;

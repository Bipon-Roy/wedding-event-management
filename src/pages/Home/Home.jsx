import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="mt-10">
                <About />
            </div>
            <Service />
        </div>
    );
};

export default Home;

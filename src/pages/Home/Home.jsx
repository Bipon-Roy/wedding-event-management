import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="bg-[#eff1f3]">
                <Service />
            </div>
        </div>
    );
};

export default Home;

import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Root = () => {
    useEffect(() => {
        AOS.init({
            delay: 0,
            duration: 1000,
            anchorPlacement: "top-bottom",
            once: true,
        });
    }, []);
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-none">
                <Navbar />
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="flex-none">
                <Footer />
            </div>
        </div>
    );
};

export default Root;

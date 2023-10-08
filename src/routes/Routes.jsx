import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";
import Wishlist from "../pages/Wishlist/Wishlist";
import HotDeals from "../pages/HotDeals/HotDeals";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/serviceDetails/:id",
                element: (
                    <PrivateRoutes>
                        <ServiceDetails />
                    </PrivateRoutes>
                ),
                loader: () => fetch("/services.json"),
            },
            {
                path: "/wishlist",
                element: (
                    <PrivateRoutes>
                        <Wishlist />
                    </PrivateRoutes>
                ),
                loader: () => fetch("/services.json"),
            },
            {
                path: "/HotDeals",
                element: (
                    <PrivateRoutes>
                        <HotDeals />
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);

export default routes;

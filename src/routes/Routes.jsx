import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";
import Wishlist from "../pages/Wishlist/Wishlist";

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
        ],
    },
]);

export default routes;

import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Error = () => {
    return (
        <div>
            <Navbar />
            <div className="text-center pt-40 space-y-5">
                <span className="text-8xl text-red-600">404!</span>
                <h1 className="text-5xl">Nothings Found Here.</h1>
            </div>
            <div className="flex justify-center mt-8">
                <Link className="px-5 py-2 bg-red-600 font-semibold text-white rounded">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default Error;

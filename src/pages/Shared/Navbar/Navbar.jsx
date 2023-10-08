import { Link, NavLink } from "react-router-dom";
import userInitial from "../../../assets/user.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
                swal("Done!", "Logout Successful!", "success");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const links = (
        <>
            <li className="mr-5 font-semibold">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-5 font-semibold">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="mr-5 font-semibold">
                <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="mr-5 font-semibold">
                <NavLink to="/register">Register</NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-[#eff1f3]">
            <nav className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>
                    <h1 className="font-semibold text-lg">Elegant Wedding </h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <div className="w-10  mr-5">
                        {user ? (
                            <img
                                className="rounded-full"
                                src={user.photoURL}
                                alt={user.displayName}
                            />
                        ) : (
                            <img className="rounded-full" src={userInitial} />
                        )}
                    </div>

                    {user ? (
                        // <div>
                        //     <div className="dropdown dropdown-end">
                        //         <p className="font-bold text-[#631A86]">{user.displayName}</p>
                        //     </div>
                        //     <button onClick={handleLogout}>Sign Out</button>
                        // </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="cursor-pointer">
                                <p className="font-bold">{user.displayName}</p>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#eff1f3] w-52"
                            >
                                <li>
                                    <button
                                        className="px-3 py-2 rounded-md font-bold text-red-700"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="px-6 border border-black py-2 rounded-md font-bold"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
    const { logIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const route = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        logIn(email, password)
            .then((result) => {
                console.log(result.user);
                swal("Welcome!", "Login Successful!", "success");
                route("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleSocialSignIn = (method) => {
        method()
            .then((result) => {
                console.log(result.user);
                swal("Welcome!", "Login Successful!", "success");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="max-w-7xl mx-auto flex justify-center">
            <div className="my-6 border-2 px-8 py-10 w-[400px] md:w-[600px] rounded-xl">
                <form className="mx-auto space-y-4" onSubmit={handleLogin}>
                    <h1 className="font-bold text-lg">Login Here</h1>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button className=" py-2 bg-[#e01e37] font-medium text-white w-full rounded">
                            Login
                        </button>
                    </div>

                    <div className="font-medium flex justify-between">
                        New Here?
                        <Link to="/register" className="underline text-[#e01e37]">
                            Create an account
                        </Link>
                    </div>
                </form>

                <div className="divider font-medium my-4">Social Login</div>
                <div className="flex justify-between">
                    <button
                        onClick={() => handleSocialSignIn(signInWithGoogle)}
                        className="font-semibold flex gap-4 px-4 py-2 bg-[#0081C9] text-white rounded-3xl items-center"
                    >
                        Continue With Google
                        <FcGoogle className="text-3xl bg-white rounded-full px-1" />
                    </button>
                    <button
                        onClick={() => handleSocialSignIn(signInWithGithub)}
                        className="font-semibold flex gap-4 px-4 py-2 bg-[#2a333f] rounded-3xl items-center text-white"
                    >
                        Continue With Github
                        <AiOutlineGithub className="text-3xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

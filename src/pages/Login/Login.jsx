import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-center">
            <div className="my-6 border-2 px-8 py-10 w-[400px] md:w-[600px]">
                <form className="mx-auto space-y-4">
                    <h1 className="font-bold text-lg">Login Here</h1>
                    <div className="form-control">
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <input
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
            </div>
        </div>
    );
};

export default Login;

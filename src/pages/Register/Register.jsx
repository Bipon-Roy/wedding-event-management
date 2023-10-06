import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-center">
            <div className="my-6 border-2 px-8 py-10 w-[400px] md:w-[600px]">
                <form className="mx-auto space-y-4">
                    <h1 className="font-bold text-lg">Register Here</h1>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button className=" py-2 bg-[#e01e37] font-medium text-white w-full rounded">
                            Register
                        </button>
                    </div>

                    <div className="font-medium flex justify-between">
                        Already have an account?
                        <Link to="/login" className="underline text-[#e01e37]">
                            Login Here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

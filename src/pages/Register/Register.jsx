import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const photoURL = formData.get("photoURL");
        const email = formData.get("email");
        const password = formData.get("password");

        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                swal("Welcome!", "Registration Successful!", "success");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="max-w-7xl mx-auto flex justify-center">
            <div className="my-6 border-2 px-8 py-10 w-[400px] md:w-[600px] rounded-xl">
                <form className="mx-auto space-y-4" onSubmit={handleRegister}>
                    <h1 className="font-bold text-lg">Register Here</h1>
                    <div className="form-control">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="photoURL"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <input
                            name="password"
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

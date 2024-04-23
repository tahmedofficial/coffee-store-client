import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignIn = () => {

    const [showPass, setShowPass] = useState(true);


    return (
        <div>
            <Header></Header>
            <div className="md:w-4/6 mx-auto">
                <form className="bg-primary_color mt-32 p-16 rounded-2xl mx-3">
                    <h1 className="text-4xl font-medium text-primary_text text-center py-8">Sign In</h1>
                    <div className="mt-4 flex justify-center">
                        <input className="w-full md:w-2/3 lg:w-2/4 h-10 outline-none rounded-lg pl-3" type="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <div className="relative w-full md:w-2/3 lg:w-2/4">
                            <input className="w-full h-10 outline-none rounded-lg pl-3" type={showPass ? "password" : "text"} name="password" placeholder="Enter your password" required />
                            <div onClick={() => setShowPass(!showPass)} className="absolute top-3 right-4">
                                {
                                    showPass ? <FaEye /> : <FaEyeSlash />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <button className="btn text-primary_text bg-primary_button w-full md:w-2/3 lg:w-2/4">Sign In</button>
                    </div>
                    <Link to="/signUp">
                        <h3 className="font-medium text-center">Do not have account?<button className="btn btn-link text-lg">Sign Up</button></h3>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
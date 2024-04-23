import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {

    const [showPass, setShowPass] = useState(true);
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const lastSignInTime = result.user?.metadata?.lastSignInTime;
                console.log(result.user);
                const user = {
                    email,
                    lastSignInTime
                }

                fetch("https://coffee-store-server-umber-five.vercel.app/user",{
                    method: "PATCH",
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(date=>{
                    console.log(date);
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Header></Header>
            <div className="md:w-4/6 mx-auto">
                <form onSubmit={handleSignIn} className="bg-primary_color mt-32 p-16 rounded-2xl mx-3">
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
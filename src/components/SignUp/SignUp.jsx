import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignUp = () => {

    const { signUpUser, sweetAlert } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(true);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        signUpUser(email, password)
            .then(result => {
                console.log(result.user);
                // new user has been created
                const creationTime = result.user?.metadata?.creationTime;
                const user = { email, creationTime };
                fetch("https://coffee-store-server-umber-five.vercel.app/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            sweetAlert("Confermation", "User added to the database")
                        }
                    })
            })
            .catch()
    }
    return (
        <div>
            <Header></Header>
            <div className="md:w-4/6 mx-auto">
                <form onSubmit={handleSignUp} className="bg-primary_color mt-32 p-16 rounded-2xl mx-3">
                    <h1 className="text-4xl font-medium text-primary_text text-center py-8">Sign Up</h1>
                    <div className="flex justify-center">
                        <input className="w-full md:w-2/3 lg:w-2/4 h-10 outline-none rounded-lg pl-3" type="text" name="name" placeholder="Enter your name" required />
                    </div>
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
                        <button className="btn text-primary_text bg-primary_button w-full md:w-2/3 lg:w-2/4">Sign Up</button>
                    </div>
                    <Link to="/signIn">
                        <h3 className="font-medium text-center">Already Sign Up?<button className="btn btn-link text-lg">Sign In</button></h3>
                    </Link>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;
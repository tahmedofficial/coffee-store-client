import { Link, NavLink } from "react-router-dom";
import bgHeading from "../../assets/images/more/15.jpg"

const Header = () => {

    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-2 rounded-xl py-2 px-6 text-primary_button font-medium border-primary_button" : "font-medium text-primary_button"}>Home</NavLink></li>
        <li><NavLink to="/addCoffee" className={({ isActive }) => isActive ? "border-2 rounded-xl py-2 px-6 text-primary_button font-medium border-primary_button" : "font-medium text-primary_button"}>Add Coffee</NavLink></li>
        <li><NavLink to="/user" className={({ isActive }) => isActive ? "border-2 rounded-xl py-2 px-6 text-primary_button font-medium border-primary_button" : "font-medium text-primary_button"}>User</NavLink></li>
    </>

    return (
        <div className="relative flex justify-center">
            <img className="w-full h-32" src={bgHeading} alt="" />
            <div className="absolute top-8 w-full">
                <nav className="navbar md:w-5/6 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn text-primary_color btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="flex items-center py-5 flex-col gap-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl text-primary_color bg-primary_button">Espresso</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-6 text-lg">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to="/signIn">
                            <button className="btn btn-ghost bg-primary_button text-primary_color">Sign In</button>
                        </Link>
                    </div>
                </nav>

            </div>

        </div>
    );
};

export default Header;
import coffeeImg from "../../assets/images/more/logo1.png";
import getImg from "../../assets/images/more/Group 28.png";
import connectImg from "../../assets/images/more/Group 34.png";
import expressoImg from "../../assets/images/more/Group 23.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {

    const handleConnect = (event) => {
        event.preventDefault();
    }
    return (
        <div className="bg-primary_color mt-20">

            <div className="md:w-5/6 mx-auto md:grid grid-cols-2 gap-16 px-5 md:px-0 py-20">
                <div className="col-span-1">
                    <img className="h-32" src={coffeeImg} alt="" />
                    <img className="py-5" src={expressoImg} alt="" />
                    <h3 className="text-primary_text font-medium">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</h3>
                    <div className="flex gap-4 text-4xl text-primary_text py-6">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                    <img src={getImg} alt="" />
                    <div className="flex flex-col gap-4 mt-6 text-primary_text">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-xl" />
                            <h3>+880 1733 333 333</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <MdEmail className="text-xl" />
                            <h3>expresso@gmail.com</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaLocationDot className="text-xl" />
                            <h3>72, Wall street, King Road, Dhaka</h3>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mt-16 md:mt-0">
                    <img src={connectImg} alt="" />
                    <form onSubmit={handleConnect} className="flex flex-col gap-4 pr-20 mt-4">
                        <input className="h-12 w-full pl-3 rounded-lg outline-none" type="text" name="name" placeholder="Name" />
                        <input className="h-12 w-full pl-3 rounded-lg outline-none" type="email" name="email" placeholder="Email" />
                        <textarea className="rounded-lg pl-3 py-2 h-52 outline-none" name="message" placeholder="Message"></textarea>
                        <button className="btn text-lg border-primary_text border-2 bg-transparent rounded-full w-52 hover:bg-primary_button hover:border-0 hover:text-primary_color">Send Message</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Footer;
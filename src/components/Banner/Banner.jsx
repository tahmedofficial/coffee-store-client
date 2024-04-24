import bannerImg from "../../assets/images/more/3.png";
import titleImg from "../../assets/images/more/Would you like.png";
import icon1 from "../../assets/images/icons/1.png";
import icon2 from "../../assets/images/icons/2.png";
import icon3 from "../../assets/images/icons/3.png";
import icon4 from "../../assets/images/icons/4.png";
import text1 from "../../assets/images/icons/Awesome Aroma.png";
import text2 from "../../assets/images/icons/High Quality.png";
import text3 from "../../assets/images/icons/Pure Grades.png";
import text4 from "../../assets/images/icons/Proper Roasting.png";


const Banner = () => {
    return (
        <div>
            <div className="hero">
                <img className="w-full lg:h-[600px]" src={bannerImg} alt="" />
                <div className="hero-content md:grid grid-cols-2 text-neutral-content">
                    <div className="col-span-1"></div>
                    <div className="col-span-1">
                        <img src={titleImg} alt="" />
                        <h3 className="text-white my-3">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</h3>
                        <button className="btn bg-primary_button text-lg border-0 text-primary_text">Learn More</button>
                    </div>
                </div>
            </div>
            
            <div className="bg-primary_color">
                <div className="md:grid grid-cols-4 gap-8 md:w-5/6 mx-auto px-4 py-4">
                    <div className="col-span-1 py-8">
                        <img src={icon1} alt="icon" />
                        <img className="py-3" src={text1} alt="icon" />
                        <h3 className="text-primary_text">You will definitely be a fan of the design & aroma of your coffee</h3>
                    </div>
                    <div className="col-span- py-8">
                        <img src={icon2} alt="icon" />
                        <img className="py-3" src={text2} alt="icon" />
                        <h3 className="text-primary_text">We served the coffee to you maintaining the best quality</h3>
                    </div>
                    <div className="col-span-1 py-8">
                        <img src={icon3} alt="icon" />
                        <img className="py-3" src={text3} alt="icon" />
                        <h3 className="text-primary_text">The coffee is made of the green coffee beans which you will love</h3>
                    </div>
                    <div className="col-span-1 py-8">
                        <img src={icon4} alt="icon" />
                        <img className="py-3" src={text4} alt="icon" />
                        <h3 className="text-primary_text">Your coffee is brewed by first roasting the green coffee beans</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
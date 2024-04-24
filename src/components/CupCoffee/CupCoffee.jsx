import cup1 from "../../assets/images/cups/Rectangle 9.png";
import cup2 from "../../assets/images/cups/Rectangle 10.png";
import cup3 from "../../assets/images/cups/Rectangle 11.png";
import cup4 from "../../assets/images/cups/Rectangle 12.png";
import cup5 from "../../assets/images/cups/Rectangle 13.png";
import cup6 from "../../assets/images/cups/Rectangle 14.png";
import cup7 from "../../assets/images/cups/Rectangle 15.png";
import cup8 from "../../assets/images/cups/Rectangle 16.png";
import title from "../../assets/images/more/Group 23.png";


const CupCoffee = () => {
    return (
        <div className="md:w-4/6 mx-auto mt-24">
            <div className="flex flex-col items-center gap-3 mb-10">
                <h3 className="text-xl font-medium text-primary_text">-- Speacial Coffee --</h3>
                <img src={title} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5 md:px-0">
                <img src={cup1} alt="Coffee" />
                <img src={cup2} alt="Coffee" />
                <img src={cup3} alt="Coffee" />
                <img src={cup4} alt="Coffee" />
                <img src={cup5} alt="Coffee" />
                <img src={cup6} alt="Coffee" />
                <img src={cup7} alt="Coffee" />
                <img src={cup8} alt="Coffee" />
            </div>
        </div>
    );
};

export default CupCoffee;
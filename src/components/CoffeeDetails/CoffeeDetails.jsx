import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import bgImg from "../../assets/images/more/11.png"

const CoffeeDetails = () => {

    const coffee = useLoaderData();

    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div>
            <Header></Header>
            <div className="w-full absolute">
                <img className="w-full" src={bgImg} alt="" />
            </div>
            <div className="md:w-4/6 mx-auto relative">
                <Link to="/">
                    <button className="btn bg-primary_text ml-5 text-white rounded-full my-12"><FaArrowLeftLong /> Back to home</button>
                </Link>
                <div className="bg-primary_color md:grid grid-cols-2 rounded-2xl">
                    <div className="col-span-1 flex justify-center">
                        <img className="py-20 h-[450px]" src={photo} alt="Photo" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-1 justify-center px-6 md:px-0 pb-10">
                        <h3 className="text-lg"><span className="font-medium">Name: </span>{name}</h3>
                        <h3 className="text-lg"><span className="font-medium">Chef: </span>{chef}</h3>
                        <h3 className="text-lg"><span className="font-medium">Supplier: </span>{supplier}</h3>
                        <h3 className="text-lg"><span className="font-medium">Taste: </span>{taste}</h3>
                        <h3 className="text-lg"><span className="font-medium">Category: </span>{category}</h3>
                        <h3 className="text-lg"><span className="font-medium">Details: </span>{details}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
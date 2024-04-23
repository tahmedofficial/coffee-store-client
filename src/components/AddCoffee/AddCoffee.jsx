import bgImg from "../../assets/images/more/11.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import coffeeTitle from "../../assets/images/more/Add New Coffee.png"
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, price, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);


        // send data to the server
        fetch("https://coffee-store-server-umber-five.vercel.app/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <div className="w-full absolute">
                <img className="w-full" src={bgImg} alt="" />
            </div>
            <div className="lg:w-4/6 md:w-5/6 mx-auto relative">
                <Link to="/">
                    <button className="btn bg-primary_text text-white rounded-full my-12"><FaArrowLeftLong /> Back to home</button>
                </Link>
                <div className="bg-primary_color rounded-xl">
                    <div className="text-center px-8 md:px-36">
                        <img className="mx-auto pt-16 pb-7" src={coffeeTitle} alt="" />
                        <h1>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h1>
                    </div>
                    <form onSubmit={handleAddCoffee}>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Name</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="name" placeholder="Enter coffee name" />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Chef</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="chef" placeholder="Enter coffee chef" />
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Price</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="price" placeholder="Enter coffee price" />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Available Quantity</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="quantity" placeholder="Enter available quantity" />
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Supplier</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="supplier" placeholder="Enter coffee supplier" />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Taste</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="taste" placeholder="Enter coffee taste" />
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Category</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="category" placeholder="Enter coffee category" />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Details</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="details" placeholder="Enter coffee details" />
                            </div>
                        </div>
                        <div className="px-16">
                            <div className="pt-8">
                                <h3 className="mb-2">Photo</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="photo" placeholder="Enter photo URL" />
                            </div>
                        </div>
                        <div className="px-16">
                            <div className="py-8">
                                <button className="btn w-full text-primary_text bg-primary_button border border-primary_text" type="submit">Add Coffee</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCoffee;
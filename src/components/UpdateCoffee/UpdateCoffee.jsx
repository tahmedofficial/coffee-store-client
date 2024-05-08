import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import bgImg from "../../assets/images/more/11.png";
import coffeeTitle from "../../assets/images/more/Update Existing Coffee Details.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, chef, price, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
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
        const updatedCoffee = { name, chef, price, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);


        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
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
                    <form onSubmit={handleUpdateCoffee}>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Name</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="name" defaultValue={name} />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Chef</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="chef" defaultValue={chef} />
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Price</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="price" defaultValue={price} />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Available Quantity</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="quantity" defaultValue={quantity} />
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Supplier</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="supplier" defaultValue={supplier} />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Taste</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="taste" defaultValue={taste} />
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-8 px-16">
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Category</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="category" defaultValue={category} />
                            </div>
                            <div className="col-span-1 pt-8">
                                <h3 className="mb-2">Details</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="details" defaultValue={details} />
                            </div>
                        </div>
                        <div className="px-16">
                            <div className="pt-8">
                                <h3 className="mb-2">Photo</h3>
                                <input className="h-10 outline-none pl-3 w-full" type="text" name="photo" defaultValue={photo} />
                            </div>
                        </div>
                        <div className="px-16">
                            <div className="py-8">
                                <button className="btn w-full text-primary_text bg-primary_button border border-primary_text" type="submit">Update Coffee</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateCoffee;
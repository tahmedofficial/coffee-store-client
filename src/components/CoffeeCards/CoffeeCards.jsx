import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const CoffeeCards = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, chef, price, photo } = coffee;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "Success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="mb-5 flex rounded-xl justify-around items-center gap-5 bg-primary_color p-4 mx-5">
            <div>
                <img className="h-52" src={photo} alt="" />
            </div>
            <div>
                <h3><span className="font-bold">Name: </span> {name}</h3>
                <h3><span className="font-bold">Chef: </span> {chef}</h3>
                <h3><span className="font-bold">Price: </span> {price}</h3>
            </div>
            <div className="flex flex-col gap-2">
                <button className="p-2 rounded-lg hover:bg-slate-400 duration-300 bg-primary_button text-white"><FaEye /></button>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="p-2 rounded-lg hover:bg-slate-400 duration-300 bg-primary_text text-white"><MdEdit /></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="p-2 rounded-lg hover:bg-slate-400 duration-300 bg-red-500 text-white"><MdDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCards;

CoffeeCards.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.object.isRequired,
    setCoffees: PropTypes.func
}
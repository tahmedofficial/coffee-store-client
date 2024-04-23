import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Users = () => {

    const loadedUsers = useLoaderData();
    const { sweetAlert } = useContext(AuthContext);
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {

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
                fetch(`http://localhost:5000/user/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0)
                            sweetAlert("Deteted!", "User deleted successfully")
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    })
            }
        });


    }

    return (
        <div>
            <Header></Header>
            <div className="overflow-x- md:w-5/6 mx-auto px-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Creation Time</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.creationTime}</td>
                                    <td></td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="p-2 rounded-lg hover:bg-slate-400 duration-300 bg-red-500 text-white"><MdDelete /></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
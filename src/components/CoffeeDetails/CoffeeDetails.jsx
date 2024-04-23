import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {

    const coffee=useLoaderData();

    return (
        <div>
            <h3>Coffee details {coffee.name}</h3>
        </div>
    );
};

export default CoffeeDetails;
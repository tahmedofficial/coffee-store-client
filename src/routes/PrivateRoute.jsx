import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h3>Loading</h3>
    }
    
    if (user) {
        return children;
    }

    return (<Navigate to="/signIn"></Navigate>);
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}
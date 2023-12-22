/* eslint-disable react/prop-types */
import { Navigate, useLocation, } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({children}) => {

    const { user,loading } = useAuth();
    const location = useLocation();
    
    // console.log(location.pathname);

    if (loading) {
        return <h2 className=" text-center text-2xl fonr-bold">Loading...</h2>
    }

    if(!user?.email)  {
        return <Navigate state={location.pathname} to={'/signin'}></Navigate>
    }

    return children
};

export default PrivateRoute;
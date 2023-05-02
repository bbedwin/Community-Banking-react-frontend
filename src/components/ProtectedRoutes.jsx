import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import ProjectContext from "../context/MainContext";


const ProtectedRoutes = () => {
    const { authToken } = useContext(ProjectContext)

    const location = useLocation()

    return (
        authToken ? <Outlet /> : <Navigate to='/signin' state={{ from: location }} replace />
    )
}

export default ProtectedRoutes
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
	const access_token = localStorage.getItem('access_token');

	if (!access_token) {
		return <Navigate to="/login" />;
	}

	return <>{children || <Outlet />}</>
};

const ProtectedAfterLogin = ({children}) => {
	const access_token = localStorage.getItem('access_token');

	if (access_token) {
		return <Navigate to="/" />;
	}

	return <>{children || <Outlet />}</>
};

export {ProtectedRoute, ProtectedAfterLogin};
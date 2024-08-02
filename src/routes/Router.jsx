/* eslint-disable react/prop-types */
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

const Router = (props) => {
	return (
		<Routes>
            <Route path="/login" element = {props?.isLoggedIn ? <Navigate to='/' /> : <Login logo={props?.logo} />} />
			<Route path="/register" element = {props?.isLoggedIn ? <Register logo={props?.logo} /> : <Navigate to='/login' />} />
			<Route path="/" element = {props?.isLoggedIn ? <Home logo={props?.logo} /> : <Navigate to='/login' />} />
			<Route path="/home" element = {props?.isLoggedIn ? <Home logo={props?.logo} /> : <Navigate to='/login' />} />
            <Route path="*" element={<NotFound logo={props?.logo} />} />
		</Routes>
	)
}
export default Router;
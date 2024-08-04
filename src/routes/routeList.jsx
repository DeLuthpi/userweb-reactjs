/* eslint-disable react/prop-types */
import logo from "../assets/svg/react.svg";
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import { ProtectedRoute, ProtectedAfterLogin } from "./ProtectedRoute";

export const routeList = [
	{
		path: "/",
		element:
		<ProtectedRoute>
			<Home logo={logo} />
		</ProtectedRoute>
	},
	{
		path: "/login",
		element:
		<ProtectedAfterLogin>
			<Login logo={logo} />
		</ProtectedAfterLogin>
	},
	{
		path: "/register",
		element:
		<ProtectedAfterLogin>
			<Register logo={logo} />
		</ProtectedAfterLogin>
	},
	{
		path: "*",
		element:
		<NotFound logo={logo} />
	},
];
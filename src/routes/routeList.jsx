/* eslint-disable react/prop-types */
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import UserList from "../pages/UserList"
import NotFound from "../pages/NotFound"
import { ProtectedRoute, ProtectedAfterLogin } from "./ProtectedRoute";

export const routeList = [
	{
		path: "/",
		element:
		<ProtectedRoute>
			<Home />
		</ProtectedRoute>
	},
	{
		path: "/home",
		element:
		<ProtectedRoute>
			<Home />
		</ProtectedRoute>
	},
	{
		path: "/user-list",
		element:
		<ProtectedRoute>
			<UserList />
		</ProtectedRoute>
	},
	{
		path: "/login",
		element:
		<ProtectedAfterLogin>
			<Login />
		</ProtectedAfterLogin>
	},
	{
		path: "/register",
		element:
		<ProtectedAfterLogin>
			<Register />
		</ProtectedAfterLogin>
	},
	{
		path: "*",
		element:
		<ProtectedRoute>
			<NotFound />
		</ProtectedRoute>
	},
];
/* eslint-disable react/prop-types */
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import { ProtectedRoute, ProtectedAfterLogin } from "./ProtectedRoute";
import { logo, signUpIllustration, signInIllustration, patternLines, error404, webName } from "../helpers/const";

export const routeList = [
	{
		path: "/",
		element:
		<ProtectedRoute>
			<Home logo={logo} webName={webName} />
		</ProtectedRoute>
	},
	{
		path: "/login",
		element:
		<ProtectedAfterLogin>
			<Login logo={logo} webName={webName} signInIllustration={signInIllustration} patternLines={patternLines} />
		</ProtectedAfterLogin>
	},
	{
		path: "/register",
		element:
		<ProtectedAfterLogin>
			<Register logo={logo} webName={webName} signUpIllustration={signUpIllustration} patternLines={patternLines} />
		</ProtectedAfterLogin>
	},
	{
		path: "*",
		element:
		<ProtectedRoute>
			<NotFound logo={logo} webName={webName} error404={error404} />
		</ProtectedRoute>
	},
];
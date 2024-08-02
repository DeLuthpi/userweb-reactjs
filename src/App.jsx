import logoReact from "./assets/svg/react.svg";
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
	return (
		<Routes>
			<Route path="/login" element = {<Login logo={logoReact} />} />
			<Route path="/register" element = {<Register logo={logoReact} />} />
		</Routes>
	)
}
export default App;
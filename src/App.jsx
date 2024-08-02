import logoReact from "./assets/svg/react.svg";
import { useState } from "react"
import Router from "./routes/Router";

const App = () => {
	const token = localStorage.getItem('token');
	const [isLoggedIn, setIsLoggedIn] = useState(token !== null ? true : false);

	return (
		<Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token} logo={logoReact}></Router>
	)
}
export default App;
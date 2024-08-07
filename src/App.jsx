import { useRoutes } from "react-router-dom"
import { routeList } from "./routes/routeList";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
	const element = useRoutes(routeList);
	return element;
}

export default App;
library.add( fas )
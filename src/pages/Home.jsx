/* eslint-disable react/prop-types */
import '../assets/css/home-style.css';

const Home = (props) => {

	const handleLogout = () => {
		localStorage.clear();
		window.location.reload();
	}

	return (
		<div className="home-page">
			<img src={props?.logo} className="logo-image" alt="react-image"/>
			<h1>Home page</h1>
			<button onClick={handleLogout} type="button">Logout</button>
		</div>
	);
};

export default Home;
/* eslint-disable react/prop-types */
import '../assets/css/home-style.css';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNav';

const Home = () => {

	return (
		<div className="main-page">
			<SideNavbar />
			<main className="main-section">
				<Navbar pages={'Home'} subPages={''} />
				<section className='home-section'>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
					<h1>Home page</h1>
				</section>
			</main>
		</div>
	);
};

export default Home;
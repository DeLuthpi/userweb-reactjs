/* eslint-disable react/prop-types */
import '../assets/css/home-style.css';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';

const Home = () => {
	const [users, setUsers] = useState([]);

	const getUsers = () => {
		axios
		.get('https://reqres.in/api/users')
		.then((res) => {
			// console.log(res.data.data);
			setUsers(res.data.data);
		})
		.catch((err) => {
			console.log(err.response)
		})
	};

	useEffect(() => {
		getUsers()
	}, []);

	return (
		<div className="main-page sidenav-show " id="main-page">
			<SideNavbar />
			<main className="main-section">
				<Navbar pages={'Home'} subPages={''} />
				<section className='home-section'>
					<div className="row">
						<div className="hsr-col">
							<div className="card card-plain hsr-card">
								<div className="card-body hsr-cb">
									<h2 className="hsr-cb-h2">Users List</h2>
								</div>
							</div>
							<div className="hsr-row-flex">
								{users.map(user => (
									<div className="card rflex-card" key={user.id}>
										<div className="card-body">
											<div className="cb-rflex">
												<img className="rflex-cbimage" src={user.avatar} alt="user-image" />
												<div className="rflex-col">
													<h5 className="rflex-cbtitle">{user.first_name} {user.last_name}</h5>
													<p className="rflex-cbtext">{user.email}</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="home-animation">
						<div className="circles">
							<div></div>
							<div></div>
							<div></div>
							<span></span>
						</div>
						<RingLoader
							color={"#ffffff"}
							cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '50' }}
							loading={true}
							size={100}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
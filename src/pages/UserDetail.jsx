/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import '../assets/css/userdetail-style.css';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserDetail = () => {
	const { id } = useParams();
	const [users, setUsers] = useState({});
	const navigate = useNavigate();

	const getUsers = () => {
		axios
		.get(`https://reqres.in/api/users/${id}`)
		.then((res) => {
			// console.log(res.data.data);
			setUsers(res.data.data);
		})
		// eslint-disable-next-line no-unused-vars
		.catch((err) => {
			console.log(err.response);
			if (err.response.status === 404) navigate('/not-found');
		});
	};
	
	useEffect(() => {
		getUsers()
	}, [id]);

	return (
		<div className="main-page sidenav-show " id="main-page">
			<SideNavbar />
			<main className="main-section">
				<Navbar pages={'User List'} subPages={'User Detail'} />
				<section className='userdetail-section'>
					<div className="card">
						<div className="css-udcb-container">
							<img className="css-udcb-bg-img" src={users?.avatar} alt="bg-user-image"/>
							<div className="card-header">
								<div className="udch-flex">
									<div className="udch-col">
										<h5 className="udch-text">User Information</h5>
									</div>
									<div className="udch-col">
										<Link to="/user-list" className="btn bg-gradient-dark udch-btn">
											<FontAwesomeIcon icon="fa-solid fa-chevron-left" />&nbsp;Back
										</Link>
									</div>
								</div>
							</div>
							<div className="css-udcb-flex">
								<div className="css-udcb-card" key={users?.id}>
									<div className="css-udline"></div>
									<img src={users?.avatar} className="css-udcb-img" alt="user-image" />
									<h3 className="css-udcb-h3">{users?.first_name} {users?.last_name}</h3>
									<p><FontAwesomeIcon className="css-udcb-icon" icon="fa-solid fa-envelope" /> mail : {users?.email}</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default UserDetail;
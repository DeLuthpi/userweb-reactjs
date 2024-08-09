/* eslint-disable react/prop-types */
import '../assets/css/userlist-style.css';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';

const UserList = () => {
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
				<Navbar pages={'User List'} subPages={''} />
				<section className='userlist-section'>
					<div className="card">
						<div className="card-header">
							<div className="ulch-flex">
								<div className="ulch-col">
									<h5 className="ulch-text">Users List</h5>
								</div>
								<div className="ulch-col">
									<Link to="/user-list/add" className="btn bg-gradient-dark ulch-btn" data-tooltip-id="my-tooltip" data-tooltip-content="Add User">
										<FontAwesomeIcon icon="fa-solid fa-user-plus" />
									</Link>
								</div>
							</div>
						</div>

						<div className="card-body css-ulcb">
							<div className="table-responsive">
								<table className="table css-ultable">
									<thead>
										<tr>
											<td className="ulth-text">No</td>
											<td className="ulth-text">Name</td>
											<td className="ulth-text">Email</td>
											<td className="ulth-text ulth-text-end">Action</td>
										</tr>
									</thead>
									<tbody>
										{users.map((user, index) => (
											<tr key={user?.id}>
												<td className="ultb-text">
													<span className="ulspan-text">{index + 1}.</span>
												</td>
												<td className="ultb-text">
													<span className="ulspan-text">{user?.first_name} {user?.last_name}</span>
												</td>
												<td className="ultb-text">
													<span className="ulspan-text">{user?.email}</span>
												</td>
												<td className="ultb-text ultb-text-end">
													<div className="ultb-btn-action">
														<Link to={`/user-list/user-detail/${user.id}`} data-tooltip-id="my-tooltip" data-tooltip-content="Detail User" >
															<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
														</Link>
														<Link to={`/user-list/delete/${user.id}`} data-tooltip-id="my-tooltip" data-tooltip-content="Delete User">
															<FontAwesomeIcon icon="fa-solid fa-trash-can" style={{ color: '#fd5c70' }} />
														</Link>
														<Tooltip id="my-tooltip" place="bottom" style={{ borderRadius: '10px' }} />
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default UserList;
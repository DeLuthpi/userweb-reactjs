/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import '../assets/css/userlist-style.css';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import { Link } from "react-router-dom";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [pagination, setPagination] = useState({
		currentPage: 1,
		nextPage: 0,
		prevPage: 0,
		showFrom: 1,
		showTo: 6,
		totalUsers: 0,
	});

	const getUsers = () => {
		axios
		.get(`https://reqres.in/api/users?per_page=6&page=${pagination.currentPage}`)
		.then((res) => {
			// console.log(res.data);
			setUsers(res.data.data);
			setPagination({
				currentPage: res.data.page,
				nextPage: res.data.page === res.data.total_pages ? 0 : res.data.page + 1,
				prevPage: res.data.page === 1 ? 0 : res.data.page - 1,
				showFrom: res.data.page * 6 - 5,
				showTo: res.data.page * 6,
				totalUsers: res.data.total,
			})
		})
		.catch((err) => {
			console.log(err.response)
		})
	};

	useEffect(() => {
		getUsers()
	}, [pagination.currentPage]);

	const handleNext = () => {
		setPagination({
			...pagination,
			currentPage: pagination.currentPage + 1,
		});
	};
	const handlePrevious = () => {
		setPagination({
		...pagination,
		currentPage: pagination.currentPage - 1,
		});
	};

	return (
		<div className="main-page sidenav-show " id="main-page">
			<SideNavbar />
			<main className="main-section">
				<Navbar pages={'User List'} subPages={''} />
				<section className='userlist-section'>
					<div className="row">
						<div className="ulsr-col">
							<div className="card card-plain ulsr-card">
								<div className="card-body ulsr-cb">
									<h2 className="ulsr-cb-h2">Users List</h2>
								</div>
							</div>
							<div className="ulsr-row-flex">
								{users.map(user => (
									<div className="card rflex-card" key={user.id}>
										<Link to={`/user-list/user-detail/${user.id}`}>
											<div className="card-body rflex-cb">
												<div className="cb-rflex">
													<img className="rflex-cbimage" src={user.avatar} alt="user-image" />
													<div className="rflex-col">
														<h5 className="rflex-cbtitle">{user.first_name} {user.last_name}</h5>
														<p className="rflex-cbtext">{user.email}</p>
													</div>
												</div>
											</div>
										</Link>
									</div>
								))}
							</div>
							<div className="ulsr-footer-data">
								<div className="uslr-data-info">
									Showing {pagination.showFrom} to {pagination.showTo} of {pagination.totalUsers} user&apos;s
								</div>
								<div className="ulsr-data-pagination">
									<button className="btn-pagination" onClick={handlePrevious} disabled={pagination.prevPage === 0}>back</button>
									<button className="btn-pagination" onClick={handleNext} disabled={pagination.nextPage === 0}>next</button>
								</div>
							</div>
						</div>
					</div>
					<div className="react-animation">
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

export default UserList;
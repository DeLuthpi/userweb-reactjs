/* eslint-disable react/prop-types */
import '../assets/css/sidenavbar-style.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { logo, webName, sidenavMenu } from "../helpers/const";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNavbar = () => {
	const { id } = useParams();

	let path = String(window.location.pathname);
	if (path === "/") {
		path = "/home";
	} else if (path === `/user-list/user-detail/${id}`) {
		path = "/user-list";
	}

	const [currentPage, setCurrentPage] = useState(path);

	const handleActive = () => {
		setCurrentPage(path);
	}

	return (
		<aside className="sidenavbar " id="sidenavbar">
			<div className="sidenav-header">
				<Link className="sidenav-logo" to="/">
					<img src={logo} className="sidenav-logo-img" alt="sidenav-logo" />
					<span className="sidenav-logo-text">{webName}</span>
				</Link>
			</div>
			<hr className="sidenav-hr" />
			<div className="sidenav-collapse">
				<ul className="sidenav-nav">
					{sidenavMenu?.map((list) => {
						return (
							<li className="nav-item" key={list?.id}>
								<Link className={`nav-link ${currentPage === list?.navRoute ? "active" : ""}`} to={list?.navRoute} onClick={handleActive}>
									<div className="icon icon-page">
										<FontAwesomeIcon icon={list?.navIcon} />
									</div>
									<span className="nav-link-text ms-1">{list?.navName}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</aside>
	);
};

export default SideNavbar;
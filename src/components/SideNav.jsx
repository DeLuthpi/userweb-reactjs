/* eslint-disable react/prop-types */
import '../assets/css/sidenavbar-style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { logo, webName, sidenavMenu } from "../helpers/const";

const SideNavbar = () => {

	let path = String(window.location.pathname);
	if (path === "/") {
		path = "/home";
	}

	const [currentPage, setCurrentPage] = useState(path);

	const handleActive = () => {
		setCurrentPage(path);
	}

	return (
		<aside className="sidenavbar">
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
										<i data-fa-i2svg>
											<svg className={`svg-inline--fa fa-${list?.navIcon} fa-w-16`} viewBox="0 0 640 640" aria-hidden="true" data-prefix="fas" data-icon={list?.navIcon} role="img" xmlns="http://www.w3.org/2000/svg" data-fa-i2svg="">
												<path fill="currentColor" className="color-background" d={list?.pathSvg}></path>
											</svg>
										</i>
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
/* eslint-disable react/prop-types */
import '../assets/css/navbar-style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [winScroll, setWinScroll] = useState('');

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY < 100) {
				setWinScroll('');
			} else {
				setWinScroll('css-blur');
			}
		});
	}, [])

	const handleSideBar = () => {
		setShowSidebar(!showSidebar);
	}

	const mainPage = document.getElementById('main-page');
	const sideNavbar = document.getElementById('sidenavbar');

	if (showSidebar) {
		mainPage.classList.add('sidenav-pinned');
		sideNavbar.classList.add('bg-white');
	} else {
		mainPage === null || mainPage === void 0 ? void 0 : mainPage.classList.remove('sidenav-pinned');
	}

	const handleLogout = () => {
		localStorage.clear();
		window.location.reload();
	}

	return (
		<nav className={`navbar navbar-main navbar-expand-lg ${winScroll}`} data-scroll="true">
			<div className="container-fluid css-container">
				<div className="col-breadcrumb">
					<div aria-label="breadcrumb">
						<ol className="breadcrumb css-breadcrumb">
							<li className="breadcrumb-item css-breadcrumb-item">
								<Link className="css-breadcrumb-link"><FontAwesomeIcon className="css-breadcrumb-icon" icon="fa-solid fa-house" /></Link>
							</li>
							<li className="breadcrumb-item css-breadcrumb-item">
								<span className="css-breadcrumb-link">Pages</span>
							</li>
							<li className="breadcrumb-item css-breadcrumb-item css-pages-active" aria-current="page">{props?.pages}</li>
						</ol>
						<h5 className="css-current-page">{(props?.subPages ? props?.subPages : props?.pages)}</h5>
					</div>
					<FontAwesomeIcon className="css-bars-lg" onClick={handleSideBar} icon={ showSidebar ? "fa-solid fa-bars" : "fa-solid fa-bars-staggered"} size="lg" />
				</div>
				<div className="col-logout">
					<FontAwesomeIcon className="css-bars" onClick={handleSideBar} icon={ showSidebar ? "fa-solid fa-bars-staggered" : "fa-solid fa-bars"} size="lg" />
					<Link className="css-logout" onClick={handleLogout}>
						<FontAwesomeIcon className="css-icon-logout" icon="fa-solid fa-right-from-bracket" />
						<span className="css-text-logout">&nbsp;Logout</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
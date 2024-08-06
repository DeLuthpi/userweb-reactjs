/* eslint-disable react/prop-types */
import '../assets/css/navbar-style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faBarsStaggered, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
								<Link className="css-breadcrumb-link"><FontAwesomeIcon className="css-breadcrumb-icon" icon={faHouse} /></Link>
							</li>
							<li className="breadcrumb-item css-breadcrumb-item">
								<span className="css-breadcrumb-link">Pages</span>
							</li>
							<li className="breadcrumb-item css-breadcrumb-item css-pages-active" aria-current="page">{props?.pages}</li>
						</ol>
						<h5 className="css-current-page">{(props?.subPages ? props?.subPages : props?.pages)}</h5>
					</div>
					<FontAwesomeIcon className="css-bars-lg" onClick={() => handleSideBar()} icon={ showSidebar ? faBarsStaggered : faBars} size="lg" />
				</div>
				<div className="col-logout">
					<FontAwesomeIcon className="css-bars" onClick={() => handleSideBar()} icon={ showSidebar ? faBarsStaggered : faBars} size="lg" />
					<Link className="css-logout" onClick={handleLogout}>
						<FontAwesomeIcon className="css-icon-logout" icon={faRightFromBracket} />
						<span className="css-text-logout">&nbsp;Logout</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
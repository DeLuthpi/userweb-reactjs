/* eslint-disable react/prop-types */
import '../assets/css/error404-style.css';
import { Link, useNavigate } from 'react-router-dom';
import { logo, webName, error404 } from "../helpers/const";

const NotFound = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	}

	return (
		<div className="error-page">
			<div className="error-header">
				<div className="container">
					<Link className="error-logo " to="/">
						<img src={logo} className="navbar-brand-img h-100" alt="logo-image" />
						{webName}
					</Link>
				</div>
			</div>
			<div className="error-section">
				<div className="container">
					<div className="row">
						<div className="col-text">
							<h1 className="error-h1">Error 404</h1>
							<h2>Erm. Page not found</h2>
							<p className="lead">We suggest you to go to the homepage while we solve this issue.</p>
							<button type="button" onClick={handleClick} className="btn btn-to-homepage">Go to Homepage</button>
						</div>
						<div className="col-image">
							<img className="error-image" src={error404} alt="error-404" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
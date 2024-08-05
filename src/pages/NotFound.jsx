/* eslint-disable react/prop-types */
import '../assets/css/error404-style.css';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = (props) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	}

	return (
		<div className="error-page">
			<div className="container">
				<Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " to="/">
					<img src={props?.logo} className="navbar-brand-img h-100" alt="logo-image" />
					{props?.webName}
				</Link>
			</div>
		
			<div className="container">
				<div className="row">
					<div className="col-lg-6 my-auto">
						<h1 className="display-1 text-bolder text-gradient text-danger">Error 404</h1>
						<h2>Erm. Page not found</h2>
						<p className="lead">We suggest you to go to the homepage while we solve this issue.</p>
						<button type="button" onClick={handleClick} className="btn bg-gradient-dark mt-4">Go to Homepage</button>
					</div>
					<div className="col-lg-6 my-auto position-relative">
						<img className="w-100 position-relative" src={props?.error404} alt="error-404" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
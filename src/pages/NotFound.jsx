/* eslint-disable react/prop-types */
import '../assets/css/home-style.css';

const NotFound = (props) => {
	return (
		<div className="notfound-page">
			<img src={props?.logo} className="logo-image" alt="react-image"/>
            <h1>NotFound page 404</h1>
		</div>
	);
};

export default NotFound;
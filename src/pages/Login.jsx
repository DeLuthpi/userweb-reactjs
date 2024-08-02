/* eslint-disable react/prop-types */
import '../assets/css/login-style.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeUserName = (e) => {
		setUserName(e.target.value);
	}
	
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	}

	const handleLogin = () => {
		console.log(userName, password);
	}

	return (
		<div className="login-page">
			<div className="logo">
				<img src={props?.logo} className="logo-image" alt="react-image"/>
				<h1 className="logo-text">User Web</h1>
			</div>
			<h2 className="login-title">Sign in to your account</h2>
			<div className="login-form">
				<div className="input-group">
					<label>Username</label>
					<input type="text" onChange={handleChangeUserName} value={userName} placeholder="username" />
				</div>
				<div className="input-group">
					<label>Password</label>
					<input type="password" onChange={handleChangePassword} value={password} placeholder="password" />
				</div>
				<p className="dont-have-account">Don&apos;t have an account? <Link to="/register" className="link-signup">Sign up</Link> </p>
				<button onClick={handleLogin} className="login-button">Sign in</button>
			</div>
		</div>
	);
};

export default Login;
/* eslint-disable react/prop-types */
import '../assets/css/login-style.css';
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const handleLogin = () => {
		const payload = {
			email: email,
			password: password,
		};

		const inputEmail = document.getElementById("email");
		const inputPassword = document.getElementById("password");

		setErrors([]);

		axios
		.post('https://reqres.in/api/login', payload)
		.then((res) => {
			// console.log(res.data);
			inputEmail.style.borderColor = '#e0e0e0';
			inputPassword.style.borderColor = '#e0e0e0';
			localStorage.setItem("token", res.data.token);
			window.location.reload();
		})
		.catch((err) => {
			localStorage.clear();

			console.log(err.response);
			if (err.response.data.error === 'Missing email or username') {
				errors['email'] = 'email is required';
				errors['password'] = '';
				inputEmail.style.borderColor = 'red';
				inputPassword.style.borderColor = '#e0e0e0';
				inputEmail.focus();
			} else if (err.response.data.error === 'Missing password') {
				const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

				if(!regex.test(email)){
					errors['email'] = 'Please enter the valid email';
					inputEmail.style.borderColor = 'red';
					inputEmail.focus();
				} else {
					errors['email'] = '';
					errors['password'] = 'password is required';
					inputEmail.style.borderColor = '#e0e0e0';
					inputPassword.style.borderColor = 'red';
					inputPassword.focus();
				}
			} else {
				errors['email'] = '';
				errors['password'] = '';
				inputEmail.style.borderColor = '#e0e0e0';
				inputPassword.style.borderColor = '#e0e0e0';
				toast.error('Failed :' + 'User not found');
			}
			setErrors(errors);
		})
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
					<label>Email</label>
					<input type="text" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" autoComplete="off" />
					<span className="alert text-danger">{errors['email']}</span>
				</div>
				<div className="input-group">
					<label>Password</label>
					<input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
					<span className="alert text-danger">{errors['password']}</span>
				</div>
				<p className="question-account">Don&apos;t have an account? <Link to="/register" className="link-signup">Sign up</Link> </p>
				<button onClick={handleLogin} className="login-button">Sign in</button>
			</div>
		</div>
	);
};

export default Login;
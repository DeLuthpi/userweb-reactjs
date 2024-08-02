/* eslint-disable react/prop-types */
import '../assets/css/register-style.css';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	const handleRegister = () => {
		const payload = {
			email: email,
			password: password,
		};

		const inputEmail = document.getElementById("email");
		const inputPassword = document.getElementById("password");

		setErrors([]);

		axios
		.post('https://reqres.in/api/register', payload)
		.then((res) => {
			// console.log(res.data);
			let token = (res.data.token);
			inputEmail.style.borderColor = '#e0e0e0';
			inputPassword.style.borderColor = '#e0e0e0';
			toast.success('Registered successfully');
			localStorage.setItem("token", token);
			setTimeout(() => navigate('/login'), 200);
		})
		.catch((err) => {
			// console.log(err.response);
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
				toast.error('Failed :' + 'Only defined users succeed registration');
			}
			setErrors(errors);
		})
	}

	return (
		<div className="register-page">
			<div className="logo">
				<img src={props?.logo} className="logo-image" alt="logo-react"/>
				<h1 className="logo-text">User Web</h1>
			</div>
			<h2 className="register-title">Create a new account</h2>
			<div className="register-form">
				<div className="input-group">
					<label>Email</label>
					<input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" autoComplete="off" />
					<span className="alert text-danger">{errors['email']}</span>
				</div>
				<div className="input-group">
					<label>Password</label>
					<input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
					<span className="alert text-danger">{errors['password']}</span>
				</div>
				<p className="question-account">Already have an account? <Link to="/login" className="link-signin">Sign in</Link> </p>
				<button onClick={handleRegister} className="register-button">Sign up</button>
			</div>
		</div>
	);
};

export default Register;
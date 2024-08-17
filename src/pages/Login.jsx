/* eslint-disable react/prop-types */
import '../assets/css/auth-style.css';
import axios from "axios";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PuffLoader } from 'react-spinners';
import { webName, signInIllustration, patternLines } from "../helpers/const";

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const emailFocus = useRef(null);
	const passwordFocus = useRef(null);
	const [invalidEmail, setInvalidEmail] = useState('');
	const [invalidPassword, setInvalidPassword] = useState('');
	const [loader, setLoader] = useState(false);
	const [showBgLoader, setShowBgLoader] = useState(false);

	const showLoader = () => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false)
			setTimeout(() => navigate('/'), 300)
		}, 2500);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		const payload = {
			email: email,
			password: password,
		};

		setErrors([]);

		axios
		.post('https://reqres.in/api/login', payload)
		.then((res) => {
			// console.log(res.data);
			setInvalidEmail('');
			setInvalidPassword('');

			localStorage.setItem('access_token', res.data.token);
			toast.success('Login successfully. Redirect to home page...', {
				autoClose: 2000,
			});
			setShowBgLoader(true);
			showLoader();
		})
		// eslint-disable-next-line no-unused-vars
		.catch((err) => {
			// console.log(err.response);
			localStorage.clear();
			const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

			if (email === '') {
				errors['email'] = 'Email is required';
				setInvalidEmail('is-invalid');
				emailFocus.current.focus();

				if (password === '') {
					errors['password'] = 'Password is required';
					setInvalidPassword('is-invalid');
				} else {
					errors['password'] = '';
					setInvalidPassword('');
				}
			} else if (password === '') {
				if(!regex.test(email)){
					errors['email'] = 'Please enter the valid email';
					setInvalidEmail('is-invalid');
					emailFocus.current.focus();
				} else {
					errors['email'] = '';
					errors['password'] = 'Password is required';
					setInvalidEmail('');
					setInvalidPassword('is-invalid');
					passwordFocus.current.focus();
				}
			} else {
				setInvalidEmail('');
				setInvalidPassword('');
				errors['email'] = '';
				errors['password'] = '';

				if(!regex.test(email)){
					errors['email'] = 'Please enter the valid email';
					setInvalidEmail('is-invalid');
					emailFocus.current.focus();
				} else {
					toast.error('Failed :' + 'Only defined users succeed logged in');
				}
			}
			setErrors(errors);
		})
	}

	return (
		<div className="page-loader">
			{showBgLoader && <div className="bg-loader"></div>}
			<div className="page-header">
				<div className="container">
					<div className="row">
						<div className="column-form">
							<div className="card card-plain">
								<div className="card-header css-card-header">
									<h4 className="css-header-h4">{webName}</h4>
									<p className="css-header-p">Enter your email and password to login</p>
								</div>
								<div className="card-body css-card-body">
									<form className="form-signup" onSubmit={handleLogin}>
										<label htmlFor="email">Email</label>
										<div className="css-input">
											<input type="email" name="email" id="email" ref={emailFocus} onChange={(e) => setEmail(e.target.value)} className={`form-control ${invalidEmail}`} placeholder="Email" value={email} autoComplete="off" />
											<span className="invalid-message">{errors['email']}</span>
										</div>
										<label htmlFor="password">Password</label>
										<div className="css-input">
											<input type="password" name="password" id="password" ref={passwordFocus} onChange={(e) => setPassword(e.target.value)} className={`form-control ${invalidPassword}`} placeholder="Password" value={password} />
											<span className="invalid-message">{errors['password']}</span>
										</div>
										<div className="css-button">
											<button type="submit" className="btn bg-gradient-dark css-btn-sign">Sign in</button>
										</div>
									</form>
								</div>
								<div className="card-footer css-card-footer">
									<p className="css-card-footer-p">Don&apos;t have an account?&ensp;<Link to="/register" className="css-card-footer-a">Sign up</Link></p>
								</div>
							</div>
						</div>
						<div className="column-image">
							<div className="css-layout-img">
								<img src={patternLines} alt="pattern-lines" className="css-pattern-lines" />
								<div className="css-illustration">
									<img className="css-illustration-img" src={signInIllustration} alt="sign-in-illustration" />
								</div>
								<h4 className="css-web-nm">{webName}</h4>
								<p className="css-copyright">{`Copyright © ${new Date().getFullYear()} — Designed by `} <Link to="https://github.com/DeLuthpi" target="_blank" className="css-footer-link">De Luthpi</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{loader &&
				<div className="login-animation">
					<div className="login-circles">
						<div></div>
						<div></div>
						<div></div>
						<span></span>
					</div>
					<PuffLoader
						color={"#F5F5F5"}
						cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '50' }}
						loading={loader}
						size={150}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			}
		</div>
	);
};

export default Login;
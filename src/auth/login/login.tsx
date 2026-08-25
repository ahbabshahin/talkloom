import React from 'react';
import Form from '../../components/form';
import Input from '../../components/input';
import styles from '../login/login.module.css';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import { Link } from 'react-router-dom';
export default function Login() {
	const [formData, setFormData] = React.useState({
		email: '',
		password: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const onSubmit = () => {
		console.log('on submit');
	};

	return (
		<main className={styles.page}>
			<div className={styles.glowOne} />
			<div className={styles.glowTwo} />

			<section className={styles.card}>
				<header className={styles.header}>
					<div className={styles.logo}>T</div>
					<p className={styles.eyebrow}>Welcome to Talkloom</p>
					<h1>Welcome back</h1>
					<p>Sign in to continue your conversations.</p>
				</header>

				<Form className={styles.form} onSubmit={onSubmit}>
					<Input
						id='email'
						label='Email address'
						name='email'
						type='email'
						placeholder='you@example.com'
						value={formData.email}
						onChange={handleChange}
						autoComplete='email'
						required
					/>

					<Input
						id='password'
						label='Password'
						name='password'
						type='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handleChange}
						autoComplete='current-password'
						minLength={6}
						required
					/>

					<div className={styles.options}>
						<Checkbox className={styles.remember}>
							<span>Remember me</span>
						</Checkbox>

						<Link to='/forgot-password'>Forgot password?</Link>
					</div>

					<Button className={styles.submitButton} type='submit'>
						Sign in
					</Button>
				</Form>

				<p className={styles.signup}>
					New to Talkloom? <a href='/signup'>Create an account</a>
				</p>
			</section>
		</main>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/form';
import Input from '../../components/input';
import Button from '../../components/button';

import styles from './signup.module.css';

type SignupFormData = {
	name: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export default function Signup() {
	const [formData, setFormData] = React.useState<SignupFormData>({
		name: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = React.useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData((currentFormData) => ({
			...currentFormData,
			[name]: value,
		}));

		if (error) {
			setError('');
		}
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			setError('Passwords do not match.');
			return;
		}

		setError('');

		const signupPayload = {
			name: formData.name.trim(),
			username: formData.username.trim(),
			email: formData.email.trim().toLowerCase(),
			password: formData.password,
		};

		console.log('Signup payload:', signupPayload);
	};

	return (
		<main className={styles.page}>
			<div className={styles.glowOne} aria-hidden='true' />
			<div className={styles.glowTwo} aria-hidden='true' />

			<section className={styles.card}>
				<header className={styles.header}>
					<div className={styles.logo}>T</div>

					<p className={styles.eyebrow}>Join Talkloom</p>

					<h1>Create your account</h1>

					<p>
						Start conversations and stay connected with your people.
					</p>
				</header>

				<Form className={styles.form} onSubmit={onSubmit}>
					<div className={styles.fieldRow}>
						<Input
							id='name'
							label='Full name'
							name='name'
							type='text'
							placeholder='John Doe'
							value={formData.name}
							onChange={handleChange}
							autoComplete='name'
							required
						/>

						<Input
							id='username'
							label='Username'
							name='username'
							type='text'
							placeholder='johndoe'
							value={formData.username}
							onChange={handleChange}
							autoComplete='username'
							minLength={3}
							required
						/>
					</div>

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

					<div className={styles.fieldRow}>
						<Input
							id='password'
							label='Password'
							name='password'
							type='password'
							placeholder='Create a password'
							value={formData.password}
							onChange={handleChange}
							autoComplete='new-password'
							minLength={6}
							required
						/>

						<Input
							id='confirmPassword'
							label='Confirm password'
							name='confirmPassword'
							type='password'
							placeholder='Repeat your password'
							value={formData.confirmPassword}
							onChange={handleChange}
							autoComplete='new-password'
							minLength={6}
							error={error}
							required
						/>
					</div>

					<p className={styles.passwordHint}>
						Use at least 6 characters.
					</p>

					<Button className={styles.submitButton} type='submit'>
						Create account
					</Button>
				</Form>

				<p className={styles.loginPrompt}>
					Already have an account? <Link to='/login'>Sign in</Link>
				</p>
			</section>
		</main>
	);
}

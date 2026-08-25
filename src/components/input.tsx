import React from 'react';
import styles from '../styles/input.module.css';

export default function Input({
	label,
	...rest
}: {
	label: string;
	[key: string]: any;
}) {
	return (
		<>
			<div className={`${styles.field}`}>
				<label className={styles.label}>{label}</label>
				<input className={styles.input} {...rest} />
				{rest?.error && (
					<p
						id={`${rest?.id}-error`}
						className={styles.error}
						role='alert'
					>
						{rest?.error}
					</p>
				)}
			</div>
		</>
	);
}

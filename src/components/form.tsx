import React from 'react';

export default function Form({ children, ...rest }: { children: React.ReactNode; [key: string]: any }) {
	return (
		<>
			<form {...rest}>{children}</form>
		</>
	);
}

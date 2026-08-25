import React from 'react'

export default function Button({
	children,
	...rest
}: {
	children: React.ReactNode;
	[key: string]: any;
}) {
	return <button {...rest}>{children}</button>;
}

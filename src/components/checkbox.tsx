import React from 'react'

export default function Checkbox({children, ...rest}: {children: React.ReactNode; [key: string]: any}) {
  return (
		<label className={rest?.className || ''}>
			<input type='checkbox' />
      {children}
		</label>
  );
}

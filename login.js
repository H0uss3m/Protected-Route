import React from 'react';
import auth from './auth';
export const Login = props => {
	return (
		<div>
			<h1> Login Page</h1>
			<button
				onClick={() => {
					auth.login(() => {
						props.history.push('/app');
					});
				}}>
				login
			</button>
		</div>
	);
};

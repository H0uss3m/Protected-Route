import React from 'react';
import auth from './auth';
export const AppLayout = props => {
	return (
		<div>
			<h1>App AppLayout</h1>
			<button
				onClick={() => {
					auth.logout(() => {
						props.history.push('/');
					});
				}}>
				logout
			</button>
		</div>
	);
};

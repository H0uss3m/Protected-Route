import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { AppLayout } from './app.layout';
import { ProtectedRoute } from './protected.route';
export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<ProtectedRoute exact path="/app" component={AppLayout} />
				<Route render={() => '404 NOT FOUND !!!'} />
			</Switch>
		</BrowserRouter>
	);
};

import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from '../routes';
import './styles.css';

function App() {
	return (
		<div className="App">
			<Routes />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

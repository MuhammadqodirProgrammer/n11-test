import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import ComponentName from './components/ClassComponent';
import { Info } from './pages/Info/Info';
import { Users } from './pages/Users/Users';

let userData = [
	{
		name: "User1",
		age: 18,
		address: "Mexico",
		clickerFunc: () => { alert("User1") }
	},
	{
		name: "User2",
		age: 18,
		address: "USA",
		clickerFunc: () => { alert("User2") }

	},
]
function App() {

	return (
		<>
			<ComponentName />

			<div className="test">
				test
			</div>
			{/* <Routes>
				<Route path='/' element={<Users />} />
				<Route path='/info' element={<Info />} />

			</Routes> */}
		</>
	);
}

export default App;

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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid enim voluptates beatae delectus fugiat at dicta maxime labore inventore, libero, aut earum molestias maiores dolorum dolores ipsum ex laborum quibusdam velit impedit temporibus. Incidunt voluptatem debitis velit? Dolores possimus voluptatibus necessitatibus tempora at qui obcaecati asperiores facere atque perspiciatis?
			</div>
			{/* <Routes>
				<Route path='/' element={<Users />} />
				<Route path='/info' element={<Info />} />

			</Routes> */}
		</>
	);
}

export default App;

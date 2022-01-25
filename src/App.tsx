import React from "react";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

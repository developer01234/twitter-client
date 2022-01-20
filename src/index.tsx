import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Register />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

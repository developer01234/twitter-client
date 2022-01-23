import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Provider store={store}>
								<Register />
							</Provider>
						}
					/>
					<Route
						path="/home"
						element={
							<Provider store={store}>
								<Home />
							</Provider>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

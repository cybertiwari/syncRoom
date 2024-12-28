import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Meeting from "./Pages/Meeting";
import EndCall from "./Pages/EndCall";
import NotFound from "./Pages/NotFound";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/meeting/:appId?/:roomId" element={<Meeting />} />
				<Route path="/end-call" element={<EndCall />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;

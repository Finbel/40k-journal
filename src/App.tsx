import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StartGame from "./pages/StartGame";

function App() {
	return (
		<Router>
			<Routes>
				{/* Home-sidan på root ("/") */}
				<Route path="/" element={<Home />} />

				{/* Start Game-sidan */}
				<Route path="/start-game" element={<StartGame />} />
			</Routes>
		</Router>
	);
}

export default App;

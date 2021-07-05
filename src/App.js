import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div>
				<Header />
				{/* <Wrapper> */}
					<Route exact path="/" component={Homepage} />
					<Route path="/about" component={About} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Footer} />
				{/* </Wrapper> */}
			</div>
		</Router>
	);
}

export default App;

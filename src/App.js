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
				<Wrapper>
					<Route exact path={["/", "/portfolio-react"]} component={Homepage} />
					<Route component="/about" component={About} />
					<Route component="/projects" component={Projects} />
					<Route component="/contact" component={Footer} />
				</Wrapper>
			</div>
		</Router>
	);
}

export default App;

import React from "react";
import "./style.css";
import backImg from "./headingImg.jpg";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";

//function to create header
function Header() {
	return (
		<div>
			{/* establishes background header image */}
			<div
				className="container-fluid p-0"
				id="bgImg"
				style={{
					backgroundImage: `url(${backImg})`,
				}}
			></div>

			<div className="row" id="nameRow">
				{/* <div className="col-9 col-md-4"> */}
				<div className="bg-light display-1 p-0" id="ee">
					Elizabeth Emerson
				</div>
			</div>

			<nav
				className="navbar navbar-expand-lg navbar-light bg-light"
				id="subtitleLinkRow"
			>
				<div className="navbar-brand bg-light" id="subTitle">
					Grow, build, learn, repeat
				</div>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggler"
					aria-controls="navbarToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
					
					<ul className="nav  mt-2 mt-lg-0 ms-auto" >
						{/* <ul className="navbar-nav  mb-2 mb-lg-0" id="linkRow"> */}
						
						<li className="nav-item active">
							<a
								to="/about"
								id="link"
								className="nav-link"
								// {
								// 	window.location.pathname === "/about"
								// 		? "nav-link active"
								// 		: "nav-link"
								// }
							>
								About Me{" "}
							</a>
						</li>
						<li className="nav-item ">
							<a
								to="/projects"
								id="link"
								className="nav-link"
								// {
								// 	window.location.pathname === "/projects"
								// 		? "nav-link active"
								// 		: "nav-link"
								// }
							>
								Projects{" "}
							</a>
						</li>
						<li className="nav-item ">
							<a
								to="/contact"
								id="link"
								className="nav-link"
								// {
								// 	window.location.pathname === "/contact"
								// 		? "nav-link active"
								// 		: "nav-link"
								// }
							>
								Contact Me{" "}
							</a>
						</li>
						<li className="nav-item ">
							<a
								className="nav-link"
								id="link"
								href="https://docs.google.com/document/d/1XnnyCAyvonrlKVCC-sQ2VxHgFOKzGe6oD_FBRDAoBKk/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								download
							>
								Resume{" "}
							</a>
						</li>
						
						<li className="nav-item" >
							<a
								to="/"
								id="link"
								className="nav-link"
								// {
								// 	window.location.pathname === "/"
								// 		? "nav-link active"
								// 		: "nav-link"
								// }
							>
								Home{" "}
							</a>
						</li>
					</ul>
				</div>
			</nav>

		
  </div>
  	);
}

export default Header;

		
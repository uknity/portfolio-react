import React from "react";
import { useState } from "react";
import "./style.css";
import backImg from "./headingImg.jpg";
import { react } from "@babel/types";
import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";

//function to create header
function Header() {
	const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);

	const toggleMenu = () => {
		setShowCollapsedMenu(true);
	};

	const show = showCollapsedMenu === true ? " show" : " ";

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
				<span className="navbar-brand bg-light" id="subTitle">
					Grow, build, learn, repeat
				</span>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-bs-target="#navbarToggler1"
					aria-controls="navbarToggler1"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={toggleMenu}
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className={"collapse navbar-collapse" + show} id="navbarToggler1">
					<ul className="navbar-nav  mt-2 mt-lg-0 ms-auto d-flex align-items-end">
						{/* <ul className="navbar-nav  mb-2 mb-lg-0" id="linkRow"> */}

						<li className="nav-item">
							<Link
								to="/"
								className=
								{
									window.location.pathname === "/portfolio-react/"
										? "nav-link active"
										: "nav-link"
								}
							>
								Home
								 <span className="sr-only"></span>
							 </Link>
						</li>

						<li className="nav-item active">
							<Link
								to="/about"
								className={
									window.location.pathname === "/about"
										? "nav-link active"
										: "nav-link"
								}
							>
								About Me<span className="sr-only"></span>
							</Link>
						</li>
						<li className="nav-item ">
							<Link
								to="/projects"
								className={
									window.location.pathname === "/projects"
										? "nav-link active"
										: "nav-link"
								}
							>
								Projects<span className="sr-only"></span>
							</Link>
							{/* <a className="nav-link" href="/projects">
								Projects
							</a> */}
						</li>
						<li className="nav-item ">
							<Link
								to="/contact"
								className={
									window.location.pathname === "/contact"
										? "nav-link active"
										: "nav-link"
								}
							>
								Contact Me<span className="sr-only"></span>
							</Link>
							{/* <a className="nav-link" href="/contact">
								Contact Me
							</a> */}
						</li>
						<li className="nav-item ">
							<a
							href="https://docs.google.com/document/d/1XnnyCAyvonrlKVCC-sQ2VxHgFOKzGe6oD_FBRDAoBKk/edit?usp=sharing"
								className="nav-link"
								target="_blank"
								rel="noopener noreferrer"
								download
							>
								Resume 
							</a>
						</li>

						
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Header;

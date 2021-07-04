import React from "react";
import "./style.css";
import backImg from "./headingImg.jpg";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

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
				<div className="col-9 col-md-4">
					<div className="bg-light display-1 p-0" id="ee">
						Elizabeth Emerson
					</div>
					<div className="bg-light" id="subTitle">
						Grow, build, learn, repeat
					</div>
				</div>
				<div className="col-3 col-md-8 bg-light">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/projects">Projects</Nav.Link>
							<Nav.Link href="/contact">Contact</Nav.Link>
							<Nav.Link
								rel="noopener noreferrer"
								href="https://docs.google.com/document/d/1XnnyCAyvonrlKVCC-sQ2VxHgFOKzGe6oD_FBRDAoBKk/edit?usp=sharing"
								target="_blank"
								download
							>
								Resume
							</Nav.Link>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</div>

			{/* <nav className="navbar  navbar-light bg-light" id="subtitleLinkRow">
				<div className="navbar-brand bg-light" id="subTitle">
					Grow, build, learn, repeat
				</div>
				
			</nav> */}
		</div>
	);
}

export default Header;

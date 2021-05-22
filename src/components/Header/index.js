import React from "react";
import "./style.css";
import backImg from "./headingImg.jpg";
import { Link } from "react-router-dom";
import resumePdf from './resumePdf.pdf';


//function to create header
function Header() {
	return (
		<div>
		<div className="container-fluid p-0" style={{
				
				backgroundImage: `url(${backImg})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				height: "400px",
			}}
		></div>
			<div className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-end" id="nameRow">
				<div className="navbar-brand display-1 p-0" id="ee">Elizabeth Emerson</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex" id="subtitleLinkRow">
				<div className="navbar navbar-expand-lg bg-light" id="subTitle">
					Grow, build, learn, repeat
				</div>
				<div className="collapse navbar-collapse flex-shrink-1  ml-auto" id="navbarSupportedContent">
					<ul className="navbar-nav  mb-2 mb-lg-0" id="linkRow">
						<li className="nav-item">
							<Link
								to="/about"
								className={
									window.location.pathname === "/about"
										? "nav-link active"
										: "nav-link"
								}
							>
								About Me{" "}
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/projects"
								className={
									window.location.pathname === "/projects"
										? "nav-link active"
										: "nav-link"
								}
							>
								Projects{" "}
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contact"
								className={
									window.location.pathname === "/contact"
										? "nav-link active"
										: "nav-link"
								}
							>
								Contact Me{" "}
							</Link>
						</li>
						<li className="nav-item">
							<a
								className="nav-link" rel="noopener noreferrer" 
								href="https://docs.google.com/document/d/1XnnyCAyvonrlKVCC-sQ2VxHgFOKzGe6oD_FBRDAoBKk/edit?usp=sharing"
								target="_blank"
								download
							>
								Resume{" "}
							</a>
						</li>
						<li className="nav-item">
							<a
                            className="nav-link"
                                href={resumePdf}
								target="_blank" rel="noopener noreferrer" 
								download
							>
								Resume(PDF){" "}
							</a>
								
			
						</li>
					</ul>
				</div>
			</nav>
			</div>
	);
}

export default Header;

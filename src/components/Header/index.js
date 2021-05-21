import React from "react";
import "./style.css";
import backImg from "./heading.jpg";
import { Link } from "react-router-dom";
import resumePdf from './resumePdf.pdf';


//function to create header
function Header() {
	return (
		<div
			className="container-fluid p-0"
			style={{
				backgroundImage: `url(${backImg})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				height: "300px",
			}}
		>
			<div className="row h-100 d-inline-block p-0"></div>
			<div className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-end nameRow">
				<div className="navbar-brand display-1 p-0">Elizabeth Emerson</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex subtitleLinkRow">
				<div className="navbar navbar-expand-lg bg-light subTitle">
					Grow, build, learn, repeat
				</div>
				<div className="collapse navbar-collapse flex-shrink-1 ml-auto navbarSupportedContent">
					<ul className="navbar-nav  mb-2 mb-lg-0 linkRow">
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

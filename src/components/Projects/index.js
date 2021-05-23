import React from "react";
import "./style.css";
import budgetTracker2 from "./budget-tracker.png";
import employeeDirectory2 from "./employee-directory.png";
import homeRoute2 from "./HomeRoute.png";
import techBlog2 from "./MVC_tech_blog.png";
import poketrade2 from "./poketrade2.png";
import weatherDashboard2 from "./weather-dashboard.png";
import codeBanner from "./code-banner.jpg";

function Projects() {
	return (
		
		  <div className="container-fluid  m-6 p-5 "> 
			<div className="row projectHeader d-flex justify-content-center">
				Projects
			</div>

			<div className="row p-3">
				<div className="col-lg-4 col-md-12 mb-lg-0 p-3">
					<a
						href="https://uknity.github.io/employee-directory-2/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={employeeDirectory2}
							className="w-100 shadow-1-strong rounded p-4 m-4"
							alt="Project image"
						/>
					</a>
					<a
						href="https://vharris113.github.io/poketrade/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={poketrade2}
							className="w-100 shadow-1-strong rounded p-4 m-4"
							alt="Project image"
						/>
					</a>
				</div>

				<div className="col-lg-4 mb-4 mb-lg-0 p-3">
					<a
						href="https://radiant-badlands-18938.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={budgetTracker2}
							className="w-100 shadow-1-strong rounded p-4 m-4"
							alt="Project image"
						/>
					</a>
					<a
						href="https://uknity.github.io/Weather_Dashboard/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={weatherDashboard2}
							className="w-100 shadow-1-strong rounded  p-4 m-4"
							alt="Project image"
						/>
					</a>
				</div>

				<div className="col-lg-4 mb-4 mb-lg-0 p-3">
					<a
						href="https://immense-cove-53002.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={techBlog2}
							className="w-100 shadow-1-strong rounded p-4 m-4"
							alt="Project image"
						/>
					</a>
					<a
						href="https://hidden-scrubland-47296.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={homeRoute2}
							className="w-100 shadow-1-strong rounded p-4  m-4"
							alt="Project image"
						/>
					</a>
				</div>
			</div>
		
		<div className="container-fluid p-0" style={{
				
			backgroundImage: `url(${codeBanner})`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			height: "500px",
		}}
	></div>
	</div>
	);
}

export default Projects;

{
	/* 

			<div className="row p-0 align-content-between mx-3">
				<div className="col ">
					<a
						href="https://radiant-badlands-18938.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={budgetTracker2}
							className="img-fluid"
							alt="Responsive image"
						></img>
					</a>
				</div>
				<div className="col mx-2">
					<a
						href="https://vharris113.github.io/poketrade/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={poketrade2}
							className="img-fluid"
							alt="Responsive image"
						></img>
					</a>
				</div>
				<div className="col mx-2">
					<a
						href="https://uknity.github.io/employee-directory-2/
"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={employeeDirectory2}
							className="img-fluid"
							alt="Responsive image"
						></img>
					</a>
				</div>
			</div>

            <div className="row p-0 align-content-between mx-3">
				<div className="col ">
					<a
						href="https://hidden-scrubland-47296.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={homeRoute2}
							className="img-fluid"
							alt="Responsive image"
						></img>
					</a>
				</div>
				<div className="col mx-2">
					<a
						href="https://immense-cove-53002.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={techBlog2}
							className="img-fluid"
							alt="Responsive image"
						></img>
					</a>
				</div>
				<div className="col mx-2">
					<a
						href="https://uknity.github.io/Weather_Dashboard/"

						target="blank"
						rel="noopener noreferrer">
						<img
							src={weatherDashboard2}
							className="img-fluid"
							alt="Responsive image"
						></img>
					</a>
				</div>
			</div> */
}

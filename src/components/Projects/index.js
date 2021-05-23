import React from "react";
import "./style.css";
import budgetTracker2 from "./budget-tracker.png";
import employeeDirectory2 from "./employee-directory.png";
import homeRoute2 from "./HomeRoute.png";
import techBlog2 from "./MVC_tech_blog.png";
import poketrade2 from "./poketrade2.png";
import weatherDashboard2 from "./weather-dashboard.png";
import codeBanner from "./full-headphones.jpg";

function Projects() {
	return (
		
		  <div className="container-fluid   " > 
			<div className="row projectHeader d-flex justify-content-center">
				Projects
			</div>

			<div className="container-fluid p-5" style={{
				
				backgroundImage: `url(${codeBanner})`,
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
				// height: "100vh",
			}}>
			<div className="row p-3 justify-content-center">
				<div className="col-5  px-5">
					<a
						href="https://uknity.github.io/employee-directory-2/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={employeeDirectory2}
							className="w-100  imgBorder"
							alt="Project image"
						/>
					</a>
				</div>
				<div className="col-5 px-5">
					<a
						href="https://vharris113.github.io/poketrade/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={poketrade2}
							className="w-100 imgBorder"
							alt="Project image"
						/>
					</a>
				</div>
			</div>
			<div className="row p-3 justify-content-center">
				<div className="col-5  px-5">
					<a
						href="https://radiant-badlands-18938.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={budgetTracker2}
							className="w-100 imgBorder"
							alt="Project image"
						/>
					</a>
				</div>

				<div className="col-5  px-5">
					
					<a
						href="https://uknity.github.io/Weather_Dashboard/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={weatherDashboard2}
							className="w-100 imgBorder"
							alt="Project image"
						/>
					</a>
				</div>
			</div>
			<div className="row p-3 justify-content-center">
				<div className="col-5  px-5">
					<a
						href="https://immense-cove-53002.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={techBlog2}
							className="w-100 imgBorder"
							alt="Project image"
						/>
					</a>
				</div>
				<div className="col-5  px-5">
					<a
						href="https://hidden-scrubland-47296.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={homeRoute2}
							className="w-100 imgBorder"
							alt="Project image"
						/>
					</a>
				</div>

				</div>
			</div>
		
		{/* <div className="container-fluid p-0" style={{
				
			backgroundImage: `url(${codeBanner})`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			height: "500px",
		}}
	></div> */}
	</div>
	);
}

export default Projects;



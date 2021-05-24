import React from "react";
import "./style.css";
import budgetTracker2 from "./budget-tracker.png";
import employeeDirectory2 from "./employee-directory.png";
import homeRoute2 from "./HomeRoute.png";
import techBlog2 from "./MVC_tech_blog.png";
import poketrade2 from "./poketrade2.png";
import weatherDashboard2 from "./weather-dashboard.png";
import codeBanner from "./full-headphones.jpg";
import transitionPic from "./transition-pic.jpg";

function Projects() {
	return (
		
		  <div className="container-fluid" > 
			<div className="row projectHeader d-flex justify-content-center align-items-center">
				Projects
			</div>

			<div className="container-fluid" id="projectContainer" style={{
				
				backgroundImage: `url(${codeBanner})`,
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
			}}>
			<div className="row p-3 justify-content-center">
				<div className="col-sm-6 col-4 py-2" id="projectCol">
				
					<a
						href="https://uknity.github.io/employee-directory-2/"
						target="blank"
						rel="noopener noreferrer"
					>
						
						<img
							src={employeeDirectory2}
							className="img-fluid w-100  imgBorder" id="projectPic"
							alt="Project image"
						/>
						
						
					</a>
					<div class="projectDesc bottom-center text-center">Employee Directory</div>
				</div>
				<div className="col-sm-6 col-4 py-2" id="projectCol">
					<a
						href="https://vharris113.github.io/poketrade/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={poketrade2}
							className="w-100 imgBorder"
							id="projectPic"
							alt="Project image"
						/>
					</a>
					<div class="projectDesc bottom-center text-center">PokeTrade</div>
				</div>
			</div>
			<div className="row p-3 justify-content-center">
				<div className="col-sm-6 col-4 py-2" id="projectCol">
					<a
						href="https://radiant-badlands-18938.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={budgetTracker2}
							className="w-100 imgBorder"
							id="projectPic"
							alt="Project image"
						/>
					</a>
					<div class="projectDesc bottom-center text-center">Budget Tracker PWA</div>
				</div>

				<div className="col-sm-6 col-4 py-2" id="projectCol">
					
					<a
						href="https://uknity.github.io/Weather_Dashboard/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={weatherDashboard2}
							className="w-100 imgBorder"
							id="projectPic"
							alt="Project image"
						/>
					</a>
					<div class="projectDesc bottom-center text-center">Weather Dashboard</div>
				</div>
			</div>
			<div className="row p-3 justify-content-center">
				<div className="col-sm-6 col-4 py-2" id="projectCol">
					<a
						href="https://immense-cove-53002.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={techBlog2}
							className="w-100 imgBorder"
							id="projectPic"
							alt="Project image"
						/>
					</a>
					<div class="projectDesc bottom-center text-center">MVC Tech Blog</div>
				</div>
				<div className="col-sm-6 col-4 py-2" id="projectCol">
					<a
						href="https://hidden-scrubland-47296.herokuapp.com/"
						target="blank"
						rel="noopener noreferrer"
					>
						<img
							src={homeRoute2}
							className="w-100 imgBorder"
							id="projectPic"
							alt="Project image"
						/>
					</a>
					<div class="projectDesc bottom-center text-center">HomeRoute</div>
				</div>

				</div>
			</div>
		
		<div className="container-fluid p-0" id="banPic" style={{
				
			backgroundImage: `url(${transitionPic})`,
			// backgroundSize: "cover",
			// backgroundRepeat: "no-repeat",
			// height: "400px",
			// backgroundAttachment: "fixed"
		}}
	></div>
	</div>
	);
}

export default Projects;



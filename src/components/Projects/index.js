import React from "react";
import "./style.css";
import budgetTracker from "./budget-tracker.png";
import employeeDirectory from "./employee-directory.png";
import homeRoutes from "./HomeRoute.png";
import techBlog from "./MVC_tech_blog.png";
import poketrade from "./poketrade.png";
import weatherDashboard from "./weather-dashboard.png";

function Projects() {
	return (
		<div className="container-fluid bodyContainer m-0 py-0">
			<div className="row p-0 align-content-between mx-3">
                 <div className="col ">
                    <a href="https://hidden-scrubland-47296.herokuapp.com/" target="blank" rel="noopener noreferrer">
                    <img src={homeRoutes} className="img-fluid" alt="Responsive image"></img>
                    </a>
                 </div>
                <div className="col mx-2"> 
                    <a href="https://vharris113.github.io/poketrade/" target="blank" rel="noopener noreferrer">
                    <img src={poketrade} className="img-fluid" alt="Responsive image"></img>
                    </a>
                </div>
                <div className="col mx-2">
                    <a href="uknity.github.io/employee-directory-2/" target="blank" rel="noopener noreferrer">
                    <img src={employeeDirectory} className="img-fluid" alt="Responsive image"></img>
                    </a>
                </div>



            </div>
        </div>
);
}

export default Projects;
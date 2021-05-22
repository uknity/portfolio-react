import React from "react";
import "./style.css";
import profileImg from "./profileImg.jpg";

function About() {
	return (
		<div className="container-fluid bodyContainer m-0 pt-6 pb-5">
			<div className="row justify-content-center">
				<div className="col-4 d-flex justify-content-center">
					<img
						src={profileImg}
						alt="profile pic"
						style={{ width: "50%", borderRadius: "60%"}}
					></img>
				</div>
			</div>
			<div className="row justify-content-center ">
				<h3 className="col-5 d-flex justify-content-center p-4 storyHeader">MY       STORY</h3>
			</div>
			<div className="row justify-content-center bioRow">
				<div className="col-6 text-center p-4">
					<div className="row">
						<p>
							Passionate problem-solver seeking to add efficiency,
							functionality, and beauty to the world through web engineering.
						</p>
					</div>
				
				<div className="row">
					<p>
						As a former corporate attorney and elementary educator, I bring a
						sense of organization, communication, and collaboration to the world
						of tech, and enthusiasm, quality, and profitability to my employers.
						I am a self-starter who knows when to ask questions. I look forward
						to contributing to your workforce with my dedication and diligence.
					</p>
				</div>
				<div className="row">
					<p>Let's build great things together.</p>
				</div>
                </div>
			</div>
		</div>
	);
}

export default About;

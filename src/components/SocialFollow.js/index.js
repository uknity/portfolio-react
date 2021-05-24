import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialFollow() {
	return (
		<div className="socialContainer">
			<a
				href="mailto: uknity@gmail.com" alt="email"
				className="fas fa-envelope social email"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faEnvelope} size="3x" />
			</a>
            <a
				href="https://github.com/uknity"
				className="fa fa-github social gitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faGithub} size="3x" />
			</a>
			<a
				href="https://www.linkedin.com/in/elizabethemersonrgba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ0nxnhuASlOt4O8Ew8nW%2Fw%3D%3D"
				className="fa fa-linkedin-square social linkedIn"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} size="3x" />
			</a>
		</div>
	);
}

export default SocialFollow;

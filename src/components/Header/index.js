import React from "react";
import "./style.css";
import backImg from "./heading.jpg";

//function to create header
function Header() {
  return (
    <div>
       
    <div className="container-fluid p-0" style={{
    backgroundImage: `url(${backImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '300px'
    }} >
        <div className="row h-100 d-inline-block " ></div>
        <heading className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-end nameRow">
        <div className="navbar-brand display-1">Elizabeth Emerson</div>
    </heading>

    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex subtitleLinkRow">

        <div className="navbar navbar-expand-lg bg-light subTitle">Grow, build, learn, repeat</div>
        <div className="collapse navbar-collapse flex-shrink-1 ml-auto navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 linkRow">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#aboutMe">About Me  </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contactMe">Contact Me    </a>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="https://docs.google.com/document/d/1XnnyCAyvonrlKVCC-sQ2VxHgFOKzGe6oD_FBRDAoBKk/edit?usp=sharing" target="_blank" download>Resume    </a> */}
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="assets/docs/Resume Emerson 2021.pdf" target="_blank" download>Resume(PDF)   </a> */}
                </li>
            </ul>

        </div>
    </nav>
    </div>

    
    </div>

  );
}

export default Header;

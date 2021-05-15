import React from "react";
import "./style.css";

//function to create header
function Header() {
  return (
    <div>
    <div className="container-fluid h-100">
        <div className="row h-100 d-inline-block navStyle"></div>
    </div>

    <div className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-end nameRow">
        <div className="navbar-brand display-1">Elizabeth Emerson</div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex" id="subtitleLinkRow">

        <div className="navbar navbar-expand-lg bg-light" id="subTitle">Grow, build, learn, repeat</div>
        <div className="collapse navbar-collapse flex-shrink-1 ml-auto" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0" id="linkRow">
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
                    <a className="nav-link" href="https://docs.google.com/document/d/1XnnyCAyvonrlKVCC-sQ2VxHgFOKzGe6oD_FBRDAoBKk/edit?usp=sharing" target="_blank" download>Resume    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="assets/docs/Resume Emerson 2021.pdf" target="_blank" download>Resume(PDF)   </a>
                </li>
            </ul>

        </div>
    </nav>
    </div>

  );
}

export default Header;

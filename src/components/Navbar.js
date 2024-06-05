import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import ReactGA from "react-ga4";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleResumeClick = () => {
    ReactGA.event({
      action: "resume_download",
      category: "Resume",
      label: "Downloaded",
    });
    window.open(
      "https://personal-resume01.s3.amazonaws.com/Vamshi_Ponugoti-Resume.pdf",
      "_blank"
    );
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <NavItemWithIcon
              icon={<AiOutlineHome style={{ marginBottom: "2px" }} />}
              text="Home"
              to="/"
              onClick={() => updateExpanded(false)}
            />
            <NavItemWithIcon
              icon={<AiOutlineUser style={{ marginBottom: "2px" }} />}
              text="About"
              to="/about"
              onClick={() => updateExpanded(false)}
            />
            <NavItemWithIcon
              icon={
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />
              }
              text="Projects"
              to="/project"
              onClick={() => updateExpanded(false)}
            />
            <NavItemWithIcon
              icon={<CgFileDocument />}
              text="Resume"
              to="/"
              onClick={() => {
                updateExpanded(false);
                handleResumeClick();
              }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const NavItemWithIcon = ({ icon, text, to, onClick }) => {
  return (
    <Nav.Item>
      <Nav.Link
        as={Link}
        to={to}
        onClick={onClick}
        className="dark:text-black flex items-center"
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2">{text}</span>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavBar;

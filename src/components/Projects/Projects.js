import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Kanban Board"
              description="Kanban Board application seamlessly integrates the intuitive user interface of React JS with the robust backend support of Spring Boot, ensuring efficient task management and team collaboration. Powered by MySQL, it offers a scalable and reliable database solution, enhancing productivity and workflow transparency for agile teams."
              ghLink="https://github.com/Vamshi5454/Kanban-board.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Inventory Management"
              description="I spearheaded the development of an innovative inventory management system, integrating robust functionalities such as real-time tracking, seamless communication via RESTful APIs, and meticulous data validation."
              ghLink="https://github.com/Vamshi5454/Inventory_management"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense-Trackeer"
              description="Crafted an intuitive Expense Tracker application utilizing React, designed to seamlessly manage and visualize personal savings and expenditures. This tool empowers users to make informed financial decisions by tracking their financial activities with ease."
              ghLink="https://github.com/Vamshi5454/Expense_Tracker_React"
              demoLink="https://expense-tracker-vamshi.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Class Management System"
              description="Developed a Class Management Web Application with React.js, featuring Material UI for an engaging UI and Node.js with Express.js for the backend, ensuring seamless attendance tracking and holiday management. Rigorous Jest testing guaranteed a stable, high-performing platform"
              ghLink=" https://github.com/Vamshi5454/Class_Attendence-Management"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

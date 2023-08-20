import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "My Portfolio",
      description: "React Project",
      imgUrl: projImg3,
      link: "https://mrinmay.netlify.app/",
    },
    {
      title: "iDogs - PetAdoption",
      description: "MERN Stack Project",
      imgUrl: projImg1,
      link: "https://idogs.netlify.app/",
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    /*{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    }, */ 
    //max up to 6 cards
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am proud to share some of the projects that I have worked on in the past. These projects showcase my skills and interests in various domains such as web development, data analysis, and machine learning. You can access these projects by clicking on the links below. I hope you will find them interesting and informative.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This is the part where I'm supposed to show you something amazing, but unfortunately, I have nothing to offer you right now. I know, I know, you're probably thinking, "What a waste of time!" or "How unprofessional!" or "Is this some kind of joke?" Well, it's not a joke, but it is kind of funny, don't you think? I mean, here you are, expecting to see some brilliant piece of work, and all you get is this lame excuse. Well, don't worry, I'm working on it. I promise. Soon, you'll be able to see the fruits of my labor. But for now, you'll have to settle for this placeholder text. Sorry about that.<br/> <br/>Please come back later😁.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>This is the part where I'm supposed to show you something amazing, but unfortunately, I have nothing to offer you right now. I know, I know, you're probably thinking, "What a waste of time!" or "How unprofessional!" or "Is this some kind of joke?" Well, it's not a joke, but it is kind of funny, don't you think? I mean, here you are, expecting to see some brilliant piece of work, and all you get is this lame excuse. Well, don't worry, I'm working on it. I promise. Soon, you'll be able to see the fruits of my labor. But for now, you'll have to settle for this placeholder text. Sorry about that.<br/> <br/>Please come back later😁.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

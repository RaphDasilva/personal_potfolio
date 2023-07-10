import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectItems from './ProjectItems';
import Categories from './Categories';
import projectData from './project-data';
import colorSharp2 from '../assets/img/color-sharp2.png';

const allCategories = ['All', ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  const [projectItems, setProjectItems] = useState(projectData);
  const [categorys] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setProjectItems(projectData);
      return;
    }

    const newItem = projectData.filter((item) => item.category === category);
    setProjectItems(newItem);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>My Recent Works</h2>
            <Categories categorys={categorys} filterItems={filterItems} />
            <ProjectItems projectContent={projectItems} />
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-img" />
    </section>
  );
};

export default Projects;

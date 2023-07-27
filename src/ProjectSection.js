import React, { useEffect, useState } from 'react';
import blogicon from './write-svgrepo-com.svg';
import "react-notion/src/styles.css";
import './Introduction.css'; // Make sure the CSS file is imported
import './projectsection.css'
import { NotionRenderer } from "react-notion";

function ProjectSection() {
  const [projects, setProjects] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch the data using useEffect
    fetch(`https://notion-api.splitbee.io/v1/table/3f904e5bbe1e4a748c83c098f4d421ab`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []); // The empty dependency array ensures this effect runs only once

  // Function to filter and get the latest 5 published components
  const getLatestPublishedComponents = () => {
    return projects.filter((item) => item.published).sort((a, b) => new Date(b.Date) - new Date(a.Date)).slice(0, 5);
  };

  // Function to format date into "month day year" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  // Check if projects is not null before calling the function
  const latestPublishedComponents = projects !== null ? getLatestPublishedComponents() : [];

  return (
    <div className='section-container '>
      <div className='content'>
        <h3 className='section-title'>
          Projects
        </h3>
        <p className='projects-section-container'>These are some of the projects I'm most proud of. The links provide indepth documentation of each project.</p>
        <ul >
          {latestPublishedComponents.map((project) => (
            <li key={project.id} className='projects-section-container'>
              <strong className='project-name'>{project.Name}</strong>: {project.Description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectSection;

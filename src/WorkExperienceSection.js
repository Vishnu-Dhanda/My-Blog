import React, { useEffect, useState } from 'react';
import blogicon from './write-svgrepo-com.svg';
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
import './projectsection.css'
function WorkExperienceSection() {
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/table/d1014d366922432a8cef2cdc64c37909`)
      .then((res) => res.json())
      .then((data) => setWorkExperiences(data));
  }, []);

  return (
    <div className='section-container'>
      <div className='content'>
        <h3 className='section-title'>
          Experience
        </h3>
        <ul>
          {workExperiences.map((experience) => (
            <li key={experience.id} className='projects-section-container'>
              <a href={experience.Link} target="_blank" rel="noopener noreferrer"><strong className='project-name'>{experience.Name}</strong></a>
              <span>: {experience.Description}</span>
              {experience.documents && experience.documents.length > 0 && (
                <div>
                  <p>Check out this work here:</p>
                  <ul>
                    {experience.documents.map((document) => (
                      <li key={document.name}>
                        <a href={document.url} target="_blank" rel="noopener noreferrer">{document.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className='experience-date'><i>{experience.Date}</i></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkExperienceSection;

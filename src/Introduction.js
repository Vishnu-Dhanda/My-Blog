import React from 'react';
import './Introduction.css'; // Make sure the CSS file is imported
import vishnudhanda from './vishnudhanda.png'

function Introduction() {
  return (
    <div className='Introduction'>
      <div className='Intro-Text'>
        
        <p>
          Hey I'm Vishnu, On this site I share my <span className='Blue-Text'>Projects</span> and write a{' '}
          <span className='Blue-Text'>Blog</span> about anything I'm dabbling with at the moment.
        </p>
        <p>
          You can find me on{' '}
          <a href='https://github.com/vishnu-dhanda' className='Blue-Text'>
            GitHub
          </a>
          , and I'm happy to chat via email: {}
          <a href='mailto:vishnu.dhanda@ucalgary.ca'><span className='Blue-Text'>vishnu.dhanda@ucalgary.ca</span></a>
        </p>
        <p>This website was a weekend project. It was made using Figma, React and Notion as a content management system. Check out the project <a href='https://github.com/Vishnu-Dhanda/My-Blog.git'>here</a>.</p>
      </div>
      <div className='image-holder'>
          <img className='Profile-photo' src={vishnudhanda} alt='Vishnu Dhanda' />
      </div>
      
    </div>
  );
}

export default Introduction;

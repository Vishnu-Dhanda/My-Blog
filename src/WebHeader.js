import './App.css';
import icon from './icon.svg'
import Introduction from './Introduction.js';
import BlogSection from './BlogSection.js'
import ProjectSection from './ProjectSection';
import WorkExperienceSection from './WorkExperienceSection';

function WebHeader() {
  return (
    
      <header className="App-header">
   
          <div className='nav-bar'>
            <div className='icon-and-name'>
              <img className='website-icon' src={icon}></img>
              <h1 className='name'>Vishnu Dhanda</h1>
            </div>
      
          <div className='links'>
            <a href='/' className='page'>Home</a>
            <a href='/all-posts' className='page'>Blog</a>
          </div>
          </div>
          <div>
          </div>
      </header>

   
    
  );
}

export default WebHeader;

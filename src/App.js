import './App.css';
import icon from './icon.svg'
import Introduction from './Introduction.js';
import BlogSection from './BlogSection.js'
import ProjectSection from './ProjectSection';
import WorkExperienceSection from './WorkExperienceSection';
import WebHeader from './WebHeader';

function App() {
  return (
    <div className='App'>
      <WebHeader/>
      <Introduction/>
      <BlogSection/>
      <ProjectSection/>
      <WorkExperienceSection/>
   
    </div>
  );
}

export default App;

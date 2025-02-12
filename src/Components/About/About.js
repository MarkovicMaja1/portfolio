import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
    
    <div className="about-container">
    <div className='technologies-title'>
   Web Applications
</div>
      <div className="all-projects">
        <div className="project">
          <div className="project-left-first"></div>
          <div className="project-right">
            <div className="project-name">Social Media Application</div>      
            <div className="project-code">App Code</div>
          </div>
        </div>
        <div className="project">
          <div className="project-left"></div>
          <div className="project-right">
            <div className="project-name">Naziv Projekta 2</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;


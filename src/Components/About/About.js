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
          <div className="project-left-first"  onClick={() => window.open("https://socialmedia-git-main-majas-projects-7ff0265a.vercel.app/auth", "_blank")}
    style={{ cursor: "pointer" }}></div>
          <div className="project-right">
            <div className="project-name">Social Media Application</div>      
            <div className="project-code">
              <a href="https://github.com/MarkovicMaja1/socialmedia" target="_blank" rel="noopener noreferrer">
                App Code
              </a>
            </div>
           
          </div>
        </div>
        <div className="project">
          <div className="project-left" onClick={() => window.open("https://quiz-eight-dun.vercel.app/", "_blank")}
    style={{ cursor: "pointer" }}></div>
          <div className="project-right">
            <div className="project-name">JavaScript Quiz</div>
            <div className="project-code">
              <a href="https://github.com/MarkovicMaja1/Quiz" target="_blank" rel="noopener noreferrer">
                App Code
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;


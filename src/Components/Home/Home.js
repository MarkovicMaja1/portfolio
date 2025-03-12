import React from 'react';
import './Home.css';
import { Link as ScrollLink } from 'react-scroll'; 

const Home = () => {
  const lines = ['HELLO', 'MY NAME IS MAJA', 'WEB DEVELOPER'];

  return (
    <div className="home-container">
      <div className="intro-text">
        {/* {lines.map((line, index) => (
          <div className="line" key={index}>
            <span
              style={{
                animationDelay: `${0.3 + index * 1.2}s`, // HELLO: 0.3s, MY NAME IS: 0.8s, MAJA: 1.3s, WEB DEVELOPER: 1.8s
              }}
            >
              {line}
            </span>
          </div>
        ))} */}


        <div className="line"><span >HELLO</span></div>
        <div className="line"><span >MY NAME IS MAJA</span></div>
        <div className="line developer" style={{ color: 'black' }}><span>WEB DEVELOPER</span></div>



        <div>
          <ScrollLink 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            offset={-100} 
            className='portfolio-button'
          >
            Portfolio
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

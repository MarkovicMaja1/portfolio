import React from 'react';
import './Home.css';

const Home = () => {
  const lines = ['HELLO', 'MY NAME IS', 'MAJA', 'WEB DEVELOPER'];

  return (
    <div className="home-container">
      <div className="intro-text">
        {lines.map((line, index) => (
          <div className="line" key={index}>
            {index !== lines.length - 1 && (
              <div className="block" style={{ animationDelay: `${index * 2}s` }}></div>
            )}
            <span
              style={{
                animationDelay: `calc(${index * 2}s + ${index === lines.length - 1 ? 0.5 : 1.5}s)`,
              }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>
      {/* <h1 data-text="Hello" className='hellou'>Hello</h1> */}
    </div>
  );
};

export default Home;

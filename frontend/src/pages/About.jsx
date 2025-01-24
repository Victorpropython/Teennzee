import React, { useEffect } from 'react';

const About = ({ setTitle }) => {
  useEffect(() => {
    setTitle("About"); 
  }, [setTitle]); 

  return (
    <div>
      <h1>About Us</h1>
      <p>TeenZee connects students with mentors to explore opportunities and grow.</p>
    </div>
  );
};

export default About;
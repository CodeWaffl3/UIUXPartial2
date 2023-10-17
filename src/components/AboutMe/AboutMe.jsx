import React from 'react';
import "./AboutMe.css"
import AboutMeAlberto from "./AboutMeAlberto/AboutMeAlberto"

function AboutMe({ activeUser }) {
  return (
    <div className='aboutMeContent'>
        {activeUser === 'Gabriel' && (
            <div className='Gab'>
                <h1>About Me</h1>
            </div>
        )}
        {activeUser === 'Alberto' && (
            <AboutMeAlberto>

            </AboutMeAlberto>
        )}
    </div>
  );
}

export default AboutMe;
import React from 'react';
import "./Resume.css"
import ResumeAlberto from './ResumeAlberto/ResumeAlberto';

function Resume({activeUser}) {
  return (
    <div className='resumeContent'>
        {activeUser === 'Gabriel' && (
            <div>
                <h1>About Me</h1>
            </div>
        )}
        {activeUser === 'Alberto' && (
            <ResumeAlberto>

            </ResumeAlberto>
        )}
    </div>
  );
}

export default Resume;
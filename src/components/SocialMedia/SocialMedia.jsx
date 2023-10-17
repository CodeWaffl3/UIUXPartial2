import React from 'react';
import "./SocialMedia.css"
import SocialMediaAlberto from './SocialMediaAlberto/SocialMediaAlberto';

function SocialMedia({activeUser}) {
  return (
    <div className='socialMediaContent'>
        {activeUser === 'Gabriel' && (
            <div>
                <h1>About Me</h1>
            </div>
        )}
        {activeUser === 'Alberto' && (
            <SocialMediaAlberto>

            </SocialMediaAlberto>
        )}
    </div>
  );
}

export default SocialMedia;
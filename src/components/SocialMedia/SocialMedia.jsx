import "./SocialMedia.css"
import SocialMediaAlberto from './SocialMediaAlberto/SocialMediaAlberto';
import PropTypes from 'prop-types';

SocialMedia.propTypes = {
  activeUser: PropTypes.string.isRequired,
};

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
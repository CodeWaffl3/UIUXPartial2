import "./SocialMedia.css"
import SocialMediaAlberto from './SocialMediaAlberto/SocialMediaAlberto';
import PropTypes from 'prop-types';
import SocialMediaGabriel from "./SocialMediaGabriel/SocialMediaGabriel.jsx";

SocialMedia.propTypes = {
  activeUser: PropTypes.string.isRequired,
};

function SocialMedia({activeUser}) {
  return (
    <div className='socialMediaContent'>
        {activeUser === 'Gabriel' && (
            <SocialMediaGabriel/>
        )}
        {activeUser === 'Alberto' && (
            <SocialMediaAlberto>

            </SocialMediaAlberto>
        )}
    </div>
  );
}

export default SocialMedia;
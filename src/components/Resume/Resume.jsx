import "./Resume.css"
import ResumeAlberto from './ResumeAlberto/ResumeAlberto';
import PropTypes from 'prop-types';
import ResumeGabriel from "./ResumeGabriel/ResumeGabriel.jsx";

Resume.propTypes = {
  activeUser: PropTypes.string.isRequired,
};
function Resume({activeUser}) {
  return (
    <div className='resumeContent'>
        {activeUser === 'Gabriel' && (
            <ResumeGabriel/>
        )}
        {activeUser === 'Alberto' && (
            <ResumeAlberto>

            </ResumeAlberto>
        )}
    </div>
  );
}

export default Resume;
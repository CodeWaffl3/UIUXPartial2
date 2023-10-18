import "./AboutMe.css"
import AboutMeAlberto from "./AboutMeAlberto/AboutMeAlberto"
import PropTypes from 'prop-types';

AboutMe.propTypes = {
  activeUser: PropTypes.string.isRequired,
};

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
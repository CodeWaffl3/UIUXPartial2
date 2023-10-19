import "./AboutMe.css"
import AboutMeAlberto from "./AboutMeAlberto/AboutMeAlberto"
import PropTypes from 'prop-types';
import AboutMeGabriel from "./AboutMeGabriel/AboutMeGabriel.jsx";

AboutMe.propTypes = {
  activeUser: PropTypes.string.isRequired,
};

function AboutMe({ activeUser }) {
  return (
    <div className='aboutMeContent'>
        {activeUser === 'Gabriel' && (
            <AboutMeGabriel/>
        )}
        {activeUser === 'Alberto' && (
            <AboutMeAlberto>

            </AboutMeAlberto>
        )}
    </div>
  );
}

export default AboutMe;
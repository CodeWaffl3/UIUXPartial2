import "./Projects.css"
import ProjectsAlberto from './ProjectsAlberto/ProjectsAlberto';
import PropTypes from 'prop-types';
import ProjectsGabriel from "./ProjectsGabriel/ProjectsGabriel.jsx";

Projects.propTypes = {
  activeUser: PropTypes.string.isRequired,
};
function Projects({ activeUser }) {
  return (
    <div className='projectsContent'>
        {activeUser === 'Gabriel' && (
            <ProjectsGabriel/>
        )}
        {activeUser === 'Alberto' && (
            <ProjectsAlberto>

            </ProjectsAlberto>
        )}
    </div>
  );
}

export default Projects;
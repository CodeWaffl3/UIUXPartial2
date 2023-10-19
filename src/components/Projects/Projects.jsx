import "./Projects.css"
import ProjectsAlberto from './ProjectsAlberto/ProjectsAlberto';
import PropTypes from 'prop-types';

Projects.propTypes = {
  activeUser: PropTypes.string.isRequired,
};
function Projects({ activeUser }) {
  return (
    <div className='projectsContent'>
        {activeUser === 'Gabriel' && (
            <div>
                <h1>About Me</h1>
            </div>
        )}
        {activeUser === 'Alberto' && (
            <ProjectsAlberto>

            </ProjectsAlberto>
        )}
    </div>
  );
}

export default Projects;
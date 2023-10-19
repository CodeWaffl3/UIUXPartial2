import "./ProjectsAlberto.css"
import raytracerImage from "./Images/raytracer.png"
import mapOverlayImage from "./Images/mapOverlay.png"
import calculatorImage from "./Images/calculator.jpeg"
import cGameImage from "./Images/lluviaDePalabras.png"

function ProjectsAlberto() {
  return (
    <div className='projectsAlbertoContent'>
        <div className='projectsGrid'>
            <div className='projectInfo'>
                <h4>
                    RayTracer
                </h4>
                <h6><a href='https://github.com/albertomoralesv/RayTracer-en-Java' target='_blank' rel="noreferrer">https://github.com/albertomoralesv/RayTracer-en-Java</a></h6>
                <img className='projectImage' src={raytracerImage} alt="RayTracer Project" />
            </div>
            <div className='projectInfo'>
                <h4>
                    Calculator <br/>
                </h4>
                <h6><a href='https://github.com/albertomoralesv/Calculadora---Android' target='_blank' rel="noreferrer">https://github.com/albertomoralesv/Calculadora---Android</a></h6>
                <img className='projectImage' src={calculatorImage} alt="Calculator Project" />
            </div>
            <div className='projectInfo'>
                <h4>
                    MapOverlay <br/>
                </h4>
                <h6><a href='https://github.com/albertomoralesv/MapOverlay' target='_blank' rel="noreferrer">https://github.com/albertomoralesv/MapOverlay</a></h6>
                <img className='projectImage' src={mapOverlayImage} alt="MapOverlay Project" />
            </div>
            <div className='projectInfo'>
                <h4>
                    Lluvia de Palabras <br/>
                </h4>
                <h6><a href='https://github.com/albertomoralesv/Juego-en-C' target='_blank' rel="noreferrer">https://github.com/albertomoralesv/Juego-en-C</a></h6>
                <img className='projectImage' src={cGameImage} alt="Game in C Project" />
            </div>
        </div>
    </div>
  );
}

export default ProjectsAlberto;
import "./Gallery.css"
import GalleryAlberto from './GalleryAlberto/GalleryAlberto';
import PropTypes from 'prop-types';
import GalleryGabriel from "./GalleryGabriel/GalleryGabriel.jsx";

Gallery.propTypes = {
  activeUser: PropTypes.string.isRequired,
};

function Gallery({activeUser}) {
  return (
    <div className='galleryContent'>
        {activeUser === 'Gabriel' && (
            <GalleryGabriel/>
        )}
        {activeUser === 'Alberto' && (
            <GalleryAlberto>

            </GalleryAlberto>
        )}
    </div>
  );
}

export default Gallery;
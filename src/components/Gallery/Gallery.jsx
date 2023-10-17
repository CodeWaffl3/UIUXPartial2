import React from 'react';
import "./Gallery.css"
import GalleryAlberto from './GalleryAlberto/GalleryAlberto';

function Gallery({activeUser}) {
  return (
    <div className='galleryContent'>
        {activeUser === 'Gabriel' && (
            <div>
                <h1>About Me</h1>
            </div>
        )}
        {activeUser === 'Alberto' && (
            <GalleryAlberto>

            </GalleryAlberto>
        )}
    </div>
  );
}

export default Gallery;
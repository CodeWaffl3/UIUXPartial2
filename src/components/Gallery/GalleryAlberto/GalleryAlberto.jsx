import "./GalleryAlberto.css"
import personalImage from "./Images/me.jpg"
import personalImage1 from "./Images/me1.jpg"
import personalImage2 from "./Images/me2.jpg"
import personalImage3 from "./Images/me3.jpg"

function GalleryAlberto() {
  return (
    <div className='galleryAlbertoContent'>
        <h1>Gallery Alberto</h1>
        <div className='galleryGrid'>
            <div className='leftColumn'>
                <img className='personalImage' src={personalImage} alt="Personal Image" />
                <img className='personalImage' src={personalImage2} alt="Personal Image" />
            </div>
            <div className='rightColumn'>
                <img className='personalImage' src={personalImage1} alt="Personal Image" />
                <img className='personalImage' src={personalImage3} alt="Personal Image" />
            </div>
        </div>
    </div>
  );
}

export default GalleryAlberto;
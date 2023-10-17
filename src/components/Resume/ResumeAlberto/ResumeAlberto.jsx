import "./ResumeAlberto.css";
import resumeImgAlberto from "./CV.png";

function ResumeAlberto() {
  return (
    <div className='resumeAlbertoContent'>
        <h1>Resume Alberto</h1>
        <img className='resumeImgAlberto' src={resumeImgAlberto} alt="Resume Alberto" />
    </div>
  );
}

export default ResumeAlberto;
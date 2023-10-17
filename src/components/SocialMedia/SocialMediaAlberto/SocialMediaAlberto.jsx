import "./SocialMediaAlberto.css"
import linkedinLogo from "./Logos/linkedinLogo.webp"
import githubLogo from "./Logos/githubLogo.webp"
import gmailLogo from "./Logos/gmailLogo.webp"
import whatsappLogo from "./Logos/whatsappLogo.webp"

function SocialMediaAlberto() {
  return (
    <div className='socialMediaAlbertoContent'>
        <h1>Connect with Alberto</h1>
        <div className='socialMedias'>
            <div className='socialMediaInfo'>
                <img className='socialMediaLogo' src={whatsappLogo} alt="Whatsapp Logo" />
                <a className='socialMediaLink' href="tel:+523336765896" target="_blank" rel="noreferrer">+52 33 36 76 58 96</a>
            </div>
            <div className='socialMediaInfo'>
                <img className='socialMediaLogo' src={gmailLogo} alt="Gmail Logo" />
                <a className='socialMediaLink' href="mailto:albertomoralesvizc@gmail.com" target="_blank" rel="noreferrer">albertomoralesvizc@gmail.com</a>
            </div>
            <div className='socialMediaInfo'>
                <img className='socialMediaLogo' src={linkedinLogo} alt="Linkedin Logo" />
                <a className='socialMediaLink' href="https://www.linkedin.com/in/alberto-morales-vizcarra-245150183" target='_blank' rel="noreferrer">https://www.linkedin.com/in/alberto-morales-vizcarra-245150183</a>
            </div>
            <div className='socialMediaInfo'>
                <img className='socialMediaLogo' src={githubLogo} alt="Github Logo" />
                <a className='socialMediaLink' href="https://github.com/albertomoralesv" target="_blank" rel="noreferrer">https://github.com/albertomoralesv</a>
            </div>
        </div>
    </div>
  );
}

export default SocialMediaAlberto;
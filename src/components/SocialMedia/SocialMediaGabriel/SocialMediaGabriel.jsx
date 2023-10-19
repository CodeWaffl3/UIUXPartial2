import "./SocialMediaGabriel.css"

import linkedinLogo from "./Logos/linkedinLogo.webp"
import githubLogo from "./Logos/githubLogo.webp"
import gmailLogo from "./Logos/gmailLogo.webp"
import whatsappLogo from "./Logos/whatsappLogo.webp"

export default function SocialMediaGabriel() {
    return (
        <div className='socialMediaGabriel'>
            <h1 className="titleSocialMedia">Connect with Gabriel</h1>
            <div className="socials">
                <a href="https://github.com/CodeWaffl3">
                    <div className="socialContainer">
                        <h3>Github</h3>
                        <img className="imagesSocial" src={githubLogo} alt="github" />
                    </div>
                </a>
                <a href="mailto:0218762@up.edu.mx">
                    <div className="socialContainer">
                        <h3>Gmail</h3>
                        <img width={130} src={gmailLogo} alt="github" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-andrés-cárdenas-tapia-7b8548259">
                    <div className="socialContainer">
                        <h3>LinkedIn</h3>
                        <img width={130} src={linkedinLogo} alt="github" />
                    </div>
                </a>
                
            </div>
            
        </div>
    );
}

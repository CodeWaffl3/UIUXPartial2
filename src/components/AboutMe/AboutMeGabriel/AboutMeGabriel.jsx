import "./AboutMeGabriel.css"
import myImageGabriel from "./AboutMeGabriel.jpg"

export default function AboutMeGabriel() {
    const randomInfo =
        `I love story telling, and design.
        I play video games, volleyball, and sing opera on my free time.
        I enjoy cooking and tea. I like 3D modelling, rigging, web design,
        video game design, animating, etc.`

    return (
        <div className='aboutMeGabrielContent'>
            <div className='aboutMeText'>
                <h1 className="aboutMeTitle">About Gabriel</h1>
                <p>{randomInfo}</p>
            </div>

            <img src={myImageGabriel} className="myImageGabriel" alt="Image Gabriel" />
        </div>
    );
}

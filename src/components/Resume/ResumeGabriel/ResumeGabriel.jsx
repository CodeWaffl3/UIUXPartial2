import "./ResumeGabriel.css"

function AboutMeAlberto() {
    const randomInfo = [
        "I love coding and learning new technologies.",
        "My favorite programming language is JavaScript.",
        "I enjoy playing musical instruments in my free time.",
        "I'm a coffee enthusiast and can't start my day without a cup.",
        "I'm a nature lover and like to go hiking on weekends.",
        "I have a passion for creating beautiful web applications.",
    ];
    return (
        <div className='aboutMeGabrielContent'>
            <h1 className="aboutMeTitle">About Gabriel</h1>
            <p>{randomInfo[0]}</p>
            <p>{randomInfo[1]}</p>
            <p>{randomInfo[2]}</p>
            <p>{randomInfo[3]}</p>
            <p>{randomInfo[4]}</p>
        </div>
    );
}

export default AboutMeAlberto;
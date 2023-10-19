import "./AboutMeAlberto.css"
import myImage from "./profileImage.jpg"

function AboutMeAlberto() {
    const myInfo = [
        "I love coding and learning new technologies.",
        "My favorite programming language is JavaScript.",
        "I enjoy playing musical instruments in my free time.",
        "I'm a coffee enthusiast and can't start my day without a cup.",
        "I'm a nature lover and like to go hiking on weekends.",
        "I have a passion for creating beautiful web applications.",
      ];
    return (
        <div className='aboutMeAlbertoContent'>
            <div className="aboutMeText">
                <h1 className="aboutMeTitle">About Alberto</h1>
                <p>{myInfo[0]}</p>
                <p>{myInfo[1]}</p>
                <p>{myInfo[2]}</p>
                <p>{myInfo[3]}</p>
                <p>{myInfo[4]}</p>
            </div>
            <img className="myImage" src={myImage} alt="Personal Image" />
        </div>
    );
}

export default AboutMeAlberto;
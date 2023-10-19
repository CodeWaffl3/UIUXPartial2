import "./PortafolioIntro.css"



export default function PortafolioIntro({imgSource = "",persPhoto}) {
    return (
        <div className="IntroSection">
            <div className="titleSection">
                <h1 className="title">Discover</h1>
                <img className="specialName" src={imgSource} alt="Special name"/>
            </div>
            <div className="titleSection">
                <h1 className="Portafolio">Portafolio.</h1>
            </div>
        </div>
    );
}


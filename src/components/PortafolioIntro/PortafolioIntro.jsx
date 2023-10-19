import "./PortafolioIntro.css"



export default function PortafolioIntro({imgSource = "",persPhoto}) {
    return (
        <div className="IntroSection">
            <div className="titleSection">
                <h1 className="title">Discover <span style={{marginLeft:"200px"}}>Portafolio.</span></h1>
                <img className="specialName" src={imgSource} alt="Special name"/>
            </div>

            <div className="photoSection">

            </div>
        </div>
    );
}


import "./PortafolioIntro.css"



export default function PortafolioIntro({imgSource = "",persPhoto}) {
    return (
        <div className="IntroSection">
            <div className="titleSection">
                <h1 className="title">Meet</h1>
                <img src={imgSource} alt="Special name"/>
            </div>

            <div className="photoSection">
                <img src={persPhoto} alt="Personal Photo" height={500} width={500}/>
            </div>
        </div>
    );
}


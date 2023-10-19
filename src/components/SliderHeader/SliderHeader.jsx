import {useRef, useState} from "react";
import "./SliderHeader.css"
import GabrielSpecialName from '/images/Frame2.svg'
import AlbertoSpecialName from '/images/FrameMayus.svg'
import PortafolioIntro from "../PortafolioIntro/PortafolioIntro.jsx";

export default function SliderHeader() {

    const windowWidth = useRef(window.innerWidth);
    const [mousePosition, setMousePosition] = useState({left: 50, top: 0});
    function handleMouseMove(ev) {
        const cursorPosition = ev.clientX / windowWidth.current * 100;
        setMousePosition({left: cursorPosition, top: ev.pageY});
    }

    return (
        <div className="main" onMouseMove={(event) => handleMouseMove(event)}
        >
            <div className="side" id="left" style={{
                width: mousePosition.left + "%"}}>
                <div className="sliderContainer">
                    <PortafolioIntro
                        imgSource={AlbertoSpecialName}
                    />
                </div>
            </div>

            <div className="side" id="right">
                <div className="sliderContainer right" >
                    <PortafolioIntro
                        imgSource={GabrielSpecialName}
                    />
                </div>
            </div>
        </div>
    );
}

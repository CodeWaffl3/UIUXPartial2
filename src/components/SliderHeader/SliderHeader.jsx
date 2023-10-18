import {useRef, useState} from "react";
import "./SliderHeader.css"
import GabrielSpecialName from '/images/Frame.svg'
import PortafolioIntro from "../PortafolioIntro/PortafolioIntro.jsx";




export default function SliderHeader({selectedPerson}) {

    const windowWidth = useRef(window.innerWidth);
    const [mousePosition, setMousePosition] = useState({left: 50, top: 0});
    //const [side, setSide] = useState({name: "", magic:  false});

    function handleMouseMove(ev) {
        if(!selectedPerson.scroll) 
        {
            return;
        }
        
        const cursorPosition = ev.clientX / windowWidth.current * 100;
        setMousePosition({left: cursorPosition, top: ev.pageY});
    }

    return (
        <div onMouseMove={(event) => handleMouseMove(event)}
        >

            <div className="side" id="left" 
            style={selectedPerson.scroll ? {transition: "all 100ms ease-out", width: mousePosition.left + "%"} : {}}>
                <div className="sliderContainer">
                    <PortafolioIntro
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

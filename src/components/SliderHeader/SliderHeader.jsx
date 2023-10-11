import {useRef, useState} from "react";

import "./SliderHeader.css"
export default function SliderHeader() {

    const windowWidth = useRef(window.innerWidth);
    const [mousePosition, setMousePosition] = useState({left: 0, top: 0});
    function handleMouseMove(ev) {
        const cursorPosition = ev.clientX / windowWidth.current * 100;
        setMousePosition({left: cursorPosition, top: ev.pageY});
    }

    return (
        <div className="main" onMouseMove={(event) => handleMouseMove(event)}>
            <div className="side" id="left" style={{
                width: mousePosition.left + "%"}}>
                <div className="sliderWrapper">
                    <div className="titleWrapper">
                        <h1 className="title">Meet Alberto</h1>
                    </div>
                </div>
            </div>
            <div className="side" id="right">
                <div className="sliderWrapper orange">
                    <div className="titleWrapper">
                        <h1 className="title">Meet Gabriel</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

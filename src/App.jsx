import './App.css'
import SliderHeader from "./components/SliderHeader/SliderHeader.jsx";
import {useState} from "react";


function App() {
    const [scroll, setScroll] = useState(false);

    const handleClick = () =>{
        setScroll(!scroll);
        if (scroll)
        {
            document.body.style.overflow = "hidden"

        }
        else if (!scroll)
        {
            document.body.style.overflow = "visible"
        }
    }


    return (
    <>
        <button onClick={handleClick}>CLICK ME</button>
        <SliderHeader onClick={handleClick}/>
    </>
    )
}

export default App

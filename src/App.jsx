import './App.css'
import SliderHeader from "./components/SliderHeader/SliderHeader.jsx";
import ShowMoreOfButton from './components/ShowMoreOfButton/ShowMoreOfButton';
import Navbar from './components/Navbar/Navbar';
import {useState} from "react";


function App() {
    const [selectedPerson, setselectedPerson] = useState({scroll:false , person:false});

    const handleClick = (name) =>{

        setselectedPerson({scroll: !selectedPerson.scroll, person: name, magic: !selectedPerson.magic});

        if (selectedPerson.scroll)
        {
            document.body.style.overflowY = "visible"
        }
        else if (selectedPerson.scroll == false)
        {
            document.body.style.overflowY = "hidden"
        }
         
        
    }

    return (
    <>
    <button>HOLA MUNDO</button>
        <Navbar transform={selectedPerson.scroll}/>
        <ShowMoreOfButton onClick={handleClick} name={"gabriel"} top={"200px"} left={"20%"}/>
        <ShowMoreOfButton onClick={handleClick} name={"alberto"} top={"200px"} left={"80%"}/>
        <SliderHeader selectedPerson={selectedPerson}/>
    </>
    )
}

export default App

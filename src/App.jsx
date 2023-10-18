import './App.css'
import SliderHeader from "./components/SliderHeader/SliderHeader.jsx";
import ShowMoreOfButton from './components/ShowMoreOfButton/ShowMoreOfButton';
import {useState} from "react";


function App() {
    const [selectedPerson, setselectedPerson] = useState({scroll:false, person:""});
    //const [magic, setMagic] = useState(false)

    const handleClick = (name) =>{

        setselectedPerson({scroll: !selectedPerson.scroll, person: name});

        if (!selectedPerson.scroll)
        {
            document.body.style.overflowY = "hidden"
        }
        else if (selectedPerson.scroll)
        {
            document.body.style.overflowY = "visible"
        }
        
    }


    return (
    <>
        <button>HOLA</button>
        <ShowMoreOfButton onClick={handleClick} name="gabriel"/>
        <SliderHeader selectedPerson={selectedPerson}/>
    </>
    )
}

export default App

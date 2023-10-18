import './App.css'
import SliderHeader from "./components/SliderHeader/SliderHeader.jsx";
import ShowMoreOfButton from './components/ShowMoreOfButton/ShowMoreOfButton';
import {useState} from "react";


function App() {
    const [selectedPerson, setselectedPerson] = useState({scroll:true, person:false});
    //const [magic, setMagic] = useState(false)

    const handleClick = (name) =>{

        setselectedPerson({scroll: !selectedPerson.scroll, person: name});

        console.log(name);

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
        <ShowMoreOfButton onClick={handleClick} name={"gabriel"} top={"200px"} left={"20%"}/>
        <ShowMoreOfButton onClick={handleClick} name={"alberto"} top={"200px"} left={"80%"}/>
        <SliderHeader selectedPerson={selectedPerson}/>
    </>
    )
}

export default App

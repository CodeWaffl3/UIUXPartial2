import { useState } from 'react';
import './App.css'
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar';
import SliderHeader from "./components/SliderHeader/SliderHeader";
import AboutMe from './components/AboutMe/AboutMe'
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Gallery from './components/Gallery/Gallery';

function App() {
  const [selectedPage, setselectedPage] = useState('Home');
  const [userShown, setUserShown] = useState('');

  const handleNavClick = (content) => {
    setselectedPage(content);
  };

  const handleUserClick = (user) => {
    setUserShown(user);
  };
=======
import SliderHeader from "./components/SliderHeader/SliderHeader.jsx";
import {useState} from "react";


function App() {
    const [scroll, setScroll] = useState(false);
>>>>>>> 27d51889ef462683dbd18d62da905d493c5194d0

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
<<<<<<< HEAD
    <div className='app'>
      <Navbar onNavClick={handleNavClick} onUserClick={handleUserClick}>

      </Navbar>
      <div className='mainContent'>
        {selectedPage === 'Home' && (
          <SliderHeader>

          </SliderHeader>
        )}
        {selectedPage === 'AboutMe' && (
          <AboutMe activeUser={userShown}>
            
          </AboutMe>
        )}
        {selectedPage === 'Resume' && (
          <Resume activeUser={userShown}>

          </Resume>
        )}
        {selectedPage === 'Projects' && (
          <Projects activeUser={userShown}>

          </Projects>
        )}
        {selectedPage === 'SocialMedia' && (
          <SocialMedia activeUser={userShown}>

          </SocialMedia>
        )}
        {selectedPage === 'Gallery' && (
          <Gallery activeUser={userShown}>
            
          </Gallery>
        )}
      </div>
    </div>
=======
        <button onClick={handleClick}>CLICK ME</button>
        <SliderHeader onClick={handleClick}/>
>>>>>>> 27d51889ef462683dbd18d62da905d493c5194d0
    </>
    )
}

export default App

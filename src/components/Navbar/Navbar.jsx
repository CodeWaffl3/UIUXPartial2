import React, {useState} from 'react';
import "./Navbar.css"

function Navbar({ onNavClick, onUserClick }) {
    const [activeButton, setActiveButton] = useState('');
    const [activeUser, setActiveUser] = useState('');

    const handleNavClick = (page) => {
        if(activeUser === ''){
            page = 'Home';
            setActiveUser('');
        }
        setActiveButton(page);
        onNavClick(page);
    };
    
    const handleUserClick = (user) => {
        if(activeUser === user){
            user = '';
            setActiveButton('Home');
            onNavClick('Home');
        }
        if(user !== '' && activeUser === ''){
            setActiveButton('AboutMe');
            onNavClick('AboutMe');
        }
        setActiveUser(user);
        onUserClick(user);
        
    };
    return (
        <div className="navbar">
            <button onClick={() => handleUserClick('Gabriel')} className={activeUser === 'Gabriel' ? 'gab' : 'iGab'}>Gabriel</button>
            <button disabled={activeUser === ''} onClick={() => handleNavClick('AboutMe')} className={(activeButton === 'AboutMe' ? 'active' : '') + (activeUser === 'Gabriel' ? ' bgab' : ' balb')}>About me</button>
            <button disabled={activeUser === ''} onClick={() => handleNavClick('Resume')} className={(activeButton === 'Resume' ? 'active' : '') + (activeUser === 'Gabriel' ? ' bgab' : ' balb')}>Resume</button>
            <button disabled={activeUser === ''} onClick={() => handleNavClick('Projects')} className={(activeButton === 'Projects' ? 'active' : '') + (activeUser === 'Gabriel' ? ' bgab' : ' balb')}>Projects</button>
            <button disabled={activeUser === ''} onClick={() => handleNavClick('SocialMedia')} className={(activeButton === 'SocialMedia' ? 'active' : '') + (activeUser === 'Gabriel' ? ' bgab' : ' balb')}>Social Media</button>
            <button disabled={activeUser === ''} onClick={() => handleNavClick('Gallery')} className={(activeButton === 'Gallery' ? 'active' : '') + (activeUser === 'Gabriel' ? ' bgab' : ' balb')}>Gallery</button>
            <button onClick={() => handleUserClick('Alberto')} className={activeUser === 'Alberto' ? 'alb' : 'iAlb'}>Alberto</button>
        </div>
    );
}

export default Navbar;
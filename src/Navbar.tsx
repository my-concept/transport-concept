import React, { FunctionComponent, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import curveSVG from '../assets/navbar1.svg';
import logo from '../assets/logo.png';

const Navbar: FunctionComponent = () => {
    const isMobile = window.innerWidth <= 768;
  
 

  // Styles CSS en ligne
  const navbarStyle = {
    position:'fixed',
    width:'100%',
    backgroundImage: `url('/assets/navbar1.svg')`,
    backgroundSize: 'cover',
  };


  const leftSectionStyle = {
    display: 'flex',
    position:'relative',
    zIndex:'1',
  };

  const logoStyle = {
    marginLeft: '1%',
    marginTop: '1%',
    width: '50px',
    height: '50px',
  };

  const titleStyle = {
    display: 'flex',
    gap: '1.5%',
    color: '#fff',
    fontSize: '1.4vw',
    fontFamily: 'Anybody',
    margin: '1.5rem',
  };

  const highlightStyle = {
    color: '#f4bc31',
  };

  const buttonsContainerStyle = {
    position: 'absolute',
    top: '2rem',
    transform: 'translateY(-50%)',
    right: '20px', 
    display: 'flex',
    gap: '20px',
    zIndex: 3, 
  };
  const buttonHoverStyle = {
    backgroundColor: '#f4bc31',
    color: '#fff',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: isMobile ? '20px' : '2vw',
    height: isMobile ? '20px' : '2vw',
    color: '#000',
    transition: 'background-color 0.3s, color 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  const btnLangueStyle = {
    ...buttonStyle,
    width: isMobile ? 'auto' : '2vw',
    padding: isMobile ? '0 5px' : '0',
    fontSize: isMobile ? '12px' : '1vw',
    fontWeight: 900,
    fontFamily: 'Anybody',
  };

  const handleCallClick = () => {
    window.location.href = 'https://wa.me/33745103736';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:support@transportconcept.fr';
  };

  const [showLangueMenu, setShowLangueMenu] = useState(false);

  const handleLangueClick = () => {
    setShowLangueMenu(!showLangueMenu);
  };
  const [hoveredButton, setHoveredButton] = useState(null);

// Fonctions pour gérer le survol des boutons
const handleButtonMouseEnter = (btnName) => {
  setHoveredButton(btnName);
};

const handleButtonMouseLeave = () => {
  setHoveredButton(null);
};
const [isLangueButtonHovered, setLangueButtonHovered] = useState(false);

  // Rendu du composant
  return (
    <div className="navbar" style={navbarStyle}>
      {/* Logo et titre */}
      <div className="left-section" style={leftSectionStyle}>
      <img style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: 'auto'}} alt="" src={curveSVG} />

        <img src={logo} alt="home" style={logoStyle} />
        <h2 style={titleStyle}>
          TRANSPORT <span style={highlightStyle}>CONCEPT</span>
        </h2>
      </div>

      {/* Boutons */}
      <div className='hidden md:flex gap-6' style={buttonsContainerStyle}>
      <a
        style={hoveredButton === 'call' ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        className="btnLogin icon"
        onMouseEnter={() => handleButtonMouseEnter('call')}
        onMouseLeave={handleButtonMouseLeave}
        onClick={handleCallClick}
      >
        <PersonIcon style={{ fontSize: '18px' }} />
      </a>
      <button
        style={isLangueButtonHovered ? { ...btnLangueStyle, ...buttonHoverStyle } : btnLangueStyle}
        className="btnLangue"
        onMouseEnter={() => setLangueButtonHovered(true)}
        onMouseLeave={() => setLangueButtonHovered(false)}
        onClick={handleLangueClick}
      >
        {showLangueMenu ? 'EN' : 'FR'}
      </button>
      {/* <a
        style={hoveredButton === 'menu' ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        className="btnMenu icon"
        onMouseEnter={() => handleButtonMouseEnter('menu')}
        onMouseLeave={handleButtonMouseLeave}
        onClick={handleMenuClick}
      >
        <MenuIcon style={{ fontSize: '18px' }} />
      </a> */}
      
    </div>
  </div>
);
};

export default Navbar;

import { FunctionComponent } from 'react';
import logo from '../assets/logo.png';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';

const Footer: FunctionComponent = () => {
  const footerStyle = {
    col:2,
    bottom: 0,
    width: '100%',
    height: '10rem',
    backgroundColor: '#000',
    color: '#e5e5e5',
    boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.5)',
    fontFamily: 'Anybody',
  };

  const logoStyle = {
    marginTop:'1rem',
    marginLeft:'35rem',
    width: '5%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  };

  const titleStyle = {

    fontSize: '0.9vw',
    lineHeight: '1rem',
    fontFamily: 'Anybody',
    color: '#f4bc31',
  };

  const linkStyle = {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: 'inherit',
    textDecoration: 'none',
  };

  const mailStyle = {
    ...linkStyle,
    top: '4.5rem',
  };



  const footer3Style = {
    top: '8rem',
    lineHeight: '1.7rem',
    fontSize: '0.8vw',
    fontFamily: 'Anybody',
    color: '#737272',
  };

  return (
    <div style={footerStyle}>
      <img style={logoStyle} src={logo} alt="home" />
      <b style={titleStyle}>Entreprise</b>
      <a style={linkStyle} href="https://wa.me/33745103736" target="_blank">
        <CallIcon style={{ fontSize: '1.1vw' }} /> +33 7 45 10 37 36
      </a>
      <a style={linkStyle} href="mailto:support@transportconcept.fr" target="_blank">
        <MailIcon style={{ fontSize: '1.1vw' }} /> support@transportconcept.fr
      </a>
      <a style={linkStyle} href="https://www.google.com/maps?q=19+rue+Unna,+91120+Palaiseau" target="_blank">
        <PlaceIcon style={{ fontSize: '1.1vw' }} />19 rue de Unna, 91120 Palaiseau
      </a> 
      <div style={{marginLeft: '40%'}}>
      <b style={footer3Style}><br/>Copyright 2023 | TRANSPORT CONCEPT - All rights reserved</b>
      </div>
    </div>
  
  );
};

export default Footer;

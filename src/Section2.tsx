import React, { FunctionComponent } from 'react';
import imgUser from '../assets/imgUser.png';
import imgCheck from '../assets/imgCheck.png';
import imgCar from '../assets/imgCar.png';
import imgDolar from '../assets/imgDolar.png';

const Section2: FunctionComponent = () => {
  const styles = {
    section: {
      width: '100%',
      margin: '3rem auto',
      padding: '0 1rem',
      boxSizing: 'border-box',
      fontFamily: 'Anybody',
      backgroundColor: '#000',
    },
    frame: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '25px',

    },
    title: {
      textAlign: 'center',
      marginTop: '2rem',
      letterSpacing: '-0.02em',
      display: 'inline-block',
      width: '100%',
      maxWidth: '100%',
      color: '#fdad00', 
    },
    description: {
      width: '100%',
      maxWidth: '100%',
      fontSize: '18px',
      letterSpacing: '-0.02em',
      lineHeight: '26px',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      color: '#fff',
    },
    img: {
      width: '4rem',
      height: '4rem',
    },
    etape: {
      flex: 1,
      width: '100%',
      maxWidth: '100%',
      textAlign: 'center',
      padding: '20px',
    }
   
  };
  if (window.matchMedia("(max-width: 600px)").matches) {
    styles.description.fontSize = '20px';
    styles.description.lineHeight = '20px';
  }
  return (
    <div style={styles.section}>
      <div style={styles.frame}>
        <b style={styles.title}>Nous rejoindre</b>
        <b style={styles.description}>
          <span>
            Que vous soyez un{' '}
            <span style={{ color: '#fdad00' }}>chauffeur professionnel</span> ou un{' '}
            <span style={{ color: '#fdad00' }}>passager</span> rejoignez notre réseau et bénéficiez d'offres exclusives
            avec nos partenaires. Faisons de chaque trajet une aventure unique
          </span>
        </b>
      </div>
      <div className='Etapes' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div className="etape" style={styles.etape}>
          <img className="imguserIcon" alt="" src={imgUser} style={styles.img} />
          <div className="title">étape 1</div>
          <b className="subtitle">S’enregistrer</b>
          <div className="description1">Démarrez avec votre inscription rapide</div>
        </div>
        <div className="etape" style={styles.etape}>
          <img className="imgCheck" alt="" src={imgCheck} style={styles.img} />
          <div className="title">étape 2</div>
          <b className="subtitle1">Confirmer</b>
          <div className="description2">Vérifiez et confirmez en un clic</div>
        </div>
        <div className="etape" style={styles.etape}>
          <img className="imgCar" alt="" src={imgCar} style={styles.img} />
          <div className="title">étape 3</div>
          <b className="subtitle">Rouler</b>
          <div className="description3">Mettez-vous en route sans soucis</div>
        </div>
        <div className="etape" style={styles.etape}>
          <img className="imgDolar" alt="" src={imgDolar} style={styles.img} />
          <div className="title">étape 4</div>
          <b className="subtitle">Gagner</b>
          <div className="description3">Atteignez vos objectifs avec nous</div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

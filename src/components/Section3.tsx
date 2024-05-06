import { FunctionComponent } from 'react';

const Section3: FunctionComponent = () => {
    
    const styles = {
        section: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          fontFamily: 'Anybody',
        },
        title: {
          fontSize: '25px',
          marginTop: '2rem',
          letterSpacing: '-0.02em',
          color: '#fdad00', 
        },
        description: {
          width: '80%',
          maxWidth: '100%',
          fontSize: '18px',
          margin:'3rem',
          textAlign: 'justify',
          color: '#000',
        },
        btn: {
          borderRadius: '10px',
          backgroundColor: '#fdad00',
          boxShadow: '0px 4px 0px rgba(196, 196, 196, 0.25)',
          width: '10rem',
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          margin: '1rem 0 3rem',
          textDecoration: 'none',
        },
        btnDescription: {
          lineHeight: '26px',
          textAlign: 'center',
          color: '#fff', // Ajouter la couleur du texte pour améliorer la lisibilité
        }
    };

    return (
        <div style={styles.section}>
            <b style={styles.title}>Nous avons le plus grand réseau</b>
            <div style={styles.description}>
              Nous sommes en train de créer le réseau ultime de transferts. Imaginez un réseau qui s'étend aux quatre coins de la France, où chaque étape devient une opportunité de découverte. Découvrez le confort de l'enregistrement, la certitude de la confirmation, le plaisir de rouler et le triomphe de gagner. Tout cela converge vers la création d'une expérience sans précédent. Joignez-vous à nous alors que nous écrivons le prochain chapitre de la mobilité - votre mobilité. Votre aventure commence bientôt.
            </div>
            <a href="https://wa.me/33745103736" target="_blank" style={styles.btn}>
                <div style={styles.btnDescription}>Contactez-nous</div>
            </a>
        </div>
    );
};

export default Section3;

import Image from 'next/image';
import React, { CSSProperties, useContext } from 'react';
import { GlobalContext } from '../../context';

const container: CSSProperties = {
  minHeight: '100vh',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const ItemContainer: CSSProperties = {
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto'
}
const itemText: CSSProperties = {
  margin: '.5rem 1rem',
  fontSize: '2rem',
  textAlign: 'center'
}
export const Services = () => {

  const { themePalette, themeDark } = useContext(GlobalContext);
  return (
    <div style={{ ...container, backgroundColor: themePalette.bgSecondary, 
      color: (themeDark ? themePalette.textPrimary : '#e1e1e1')}}>
      
      <h1 style={{textTransform: 'uppercase', textAlign: 'center', 
      paddingTop:'2rem', marginBottom: '-3rem'}}>
        Servicios
      </h1>
      <div className='servicesContainer'>
        <div style={{ ...ItemContainer }}>
          <Image width={190} height={190} src={require('../../assets/img/files32.svg')}
          alt="files"
          />
          <p style={{ ...itemText }}>
            Diseños 100% responsivos y SEO friendly para un perfecto posicionamiento en los
            navegadores web.
          </p>
        </div>

        <div style={{ ...ItemContainer }}>
          <Image width={190} height={190} src={require('../../assets/img/server2.svg')} 
          alt="servidor"
          />
          <p style={{ ...itemText}}>Alojaminto en servidores de alto rendiminto para el consumo de archivos
            sin demora y de acceso mundial.
          </p>
        </div>
        <div style={{ ...ItemContainer }}>
          <Image width={200} height={200} src={require('../../assets/img/rol-user2.svg')} 
          alt="autenticacion de usuario"
          />
          <p style={{ ...itemText, paddingBottom: '2rem'}}>
            Panel de control de tu sitio web con roles de usuario autenticados.
          </p>
        </div>

      </div>
    </div>
  )
}

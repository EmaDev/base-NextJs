import React, { CSSProperties, useContext } from 'react';
import { GlobalContext } from '../context';

const container:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 0',
    paddingTop: '3rem'
}
const year = new Date();
export const Footer = () => {

  const {themePalette} = useContext(GlobalContext);

  return (
    <div style={{...container, backgroundColor: themePalette.bgSecondary}}>
        <p style={{color: '#e1e1e1', fontWeight: 'bold'}}>{`Todos los derechos reservados ${year.getFullYear()}©`}</p>
    </div>
  )
}

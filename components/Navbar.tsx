import Link from 'next/link';
import { CSSProperties, useContext, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5'
import { GlobalContext } from '../context';
import { ChangerTheme } from './ChangerTheme';

const styleDiv: CSSProperties = {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  zIndex: 9999
}
const Header: CSSProperties = {
  width: '100%',
  minHeight: '4rem',
  padding: '1.5rem 1rem',
  display: 'flex',
  alignItems: 'center'
}

const container: CSSProperties = {
  width: '90%',
  margin: 'auto',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Raleway'
}

export const Navbar = () => {

  const { setMenu, themePalette, setDarkTheme, themeDark } = useContext(GlobalContext);
  return (
    <div style={{ ...styleDiv, backgroundColor: themePalette.bgDefault }}>
      <div style={{ ...Header }}>

        <h1 style={{margin: 0, padding: 0}}>Devs</h1>
        <div style={{flex: 1}}/>
        <div onClick={() => setMenu(false)}>
          <IoCloseCircleOutline size='4rem'/>
        </div>

      </div>
      <div style={{ ...container }}>
        <Link href="./">Que ofrecemos</Link>
        <Link href="./">Planes y Precios</Link>
        <Link href="./">Contacto</Link>
      </div>
      <ChangerTheme bottom='1rem' right='1rem'/>
    </div>
  )
}

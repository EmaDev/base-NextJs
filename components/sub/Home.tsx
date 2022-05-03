import { CSSProperties, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { GlobalContext } from '../../context';
import { ChangerTheme } from '../ChangerTheme';


const headerContainer: CSSProperties = {
    minHeight: '90vh',
    paddingTop: '2rem',
}
const headerContainerBig: CSSProperties = {
    minHeight: '90vh',
    padding: '0 50px',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    alignItems: 'center',
    margin: 'auto'
}

const textos: CSSProperties = {
    margin: '0 1rem',
    padding: '1rem 0',
    fontWeight: 'bold',
}

const imageContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
}

export const Home = () => {

    const { themePalette } = useContext(GlobalContext);
    const isBigScreenResp = useMediaQuery({ query: '(min-width: 800px)' });
    const [isBigScreen, setIsBigScreen] = useState<Boolean>(false);

    useEffect(() => {
        setIsBigScreen(isBigScreenResp);
    }, [isBigScreenResp]);
    return (
        <div className='homeHeader' style={{ backgroundColor: themePalette.bgDefault }}>
            <ChangerTheme top='1rem' right='1.5rem' />
            <div style={{ ...textos, color: themePalette.textPrimary, paddingTop: (isBigScreen) ? '.2rem' : '4rem' }}>
                <h1 style={{ margin: 0, padding: 0 }}>Creamos tu sitio Web</h1>
                <h2 style={{
                    color: themePalette.textPrimaryLigth, maxWidth: '80%', margin: 0, padding: 0
                }}>Sitios y aplicaciones Web de alto rendiemieto, con un ecosistema completo de herramientas y servicios modernos.</h2>
            </div>
            <div style={{ ...imageContainer }}>
                <Image src={require('../../assets/img/desinger.svg')}
                    width={(isBigScreen) ? 500 : 300}
                    alt="header image"
                />
            </div>
        </div>
    )
}

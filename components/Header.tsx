import { CSSProperties, useContext } from 'react';
import { MdMenu } from 'react-icons/md';

import { GlobalContext } from '../context';


const container: CSSProperties = {
    width: '100%',
    minHeight: '4rem',
    padding: '2rem 1rem',
    display: 'flex',
    alignItems: 'center'
}
const divMenu: CSSProperties = {
    margin: '0 .5rem',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center'
}


export const Header = () => {

    const { themePalette, setMenu } = useContext(GlobalContext);
    return (
        <>
            <div style={{
                ...container, backgroundColor: themePalette.bgSecondary,
                color: themePalette.white
            }}>
                <h1 style={{ margin: 0, padding: 0 }}>DevsArg</h1>
                <div style={{ flex: 1 }} />
                <div style={{ ...divMenu }} onClick={() => setMenu(true)}>
                    <MdMenu size='3rem' />
                    <p style={{ margin: '0 .3rem', padding: 0, fontSize: '2rem' }}>Menu</p>
                </div>
            </div>
        </>
    )
}

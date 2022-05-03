import { CSSProperties, FC, useContext, useEffect, useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { BsMoonStarsFill } from 'react-icons/bs';
import { GlobalContext } from '../context';


const container: CSSProperties = {
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const button: CSSProperties = {
    width: '3rem', 
    height: '3rem',
    padding: '.3rem', 
    borderRadius: '100%', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center'
}

interface Props {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
}
export const ChangerTheme:FC<Props> = ({left='', right='', top='',bottom=''}) => {

    const { themeDark, setDarkTheme } = useContext(GlobalContext);
    const [postionContainer, setPostionContainer] = useState<Props>({});
    useEffect( () => {
        setPostionContainer({
            top,
            bottom,
            left,
            right
        })
    },[top,left,bottom,right]);
    return (
        <div style={{ position: 'absolute', ...postionContainer }}>
            <div onClick={() => setDarkTheme(!themeDark)} style={{
                ...container, backgroundColor: (themeDark) ? '#292929' : '#80e9cb',
                padding: (themeDark) ? '.2rem .1rem .2rem 3rem' : '.2rem 3rem .2rem .1rem',
            }}>
                {(!themeDark)
                    ?
                        <div style={{
                            ...button,backgroundColor: '#619bae'
                        }}>
                            <FaSun size='2rem' color='yellow' />
                        </div>
                    :
                        <div style={{
                           ...button,backgroundColor: 'black'
                        }}>
                            <BsMoonStarsFill size='2rem' color='white' />
                        </div>
                }

            </div>
        </div>
    )
}

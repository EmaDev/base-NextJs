import Image from 'next/image';
import Link from 'next/link';
import React, { CSSProperties, FC } from 'react';

interface Props {
    url: string;
    img: string;
}
const container: CSSProperties = {
    width: '300px',
    backgroundColor: 'transparent',
    margin: '2rem',
    borderRadius: '8px',
}
const button:CSSProperties = {
    padding: '1rem 2rem',
    borderRadius: '8px',
    color: '#e1e1e1',
    width: '100%',
    borderStyle: 'none',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    backgroundColor: '#d8621f'
}
export const ExampleWebSite: FC<Props> = ({ url,img }) => {
    return (
        <div style={{ ...container }}>
            <Image src={require(`../../assets/sites/${img}.jpg`)} alt={img}/>
            <button style={{...button}}>
                <Link href={url}>
                    <a target="_blank" style={{color: '#e1e1e1', fontWeight: 'bold'}}>Visitar sitio de ejemplo</a>
                </Link>
            </button>
        </div>
    )
}

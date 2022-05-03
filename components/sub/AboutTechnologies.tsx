import Image from "next/image";
import { CSSProperties} from "react";
import { AiFillCheckCircle } from "react-icons/ai";


const container: CSSProperties = {
    margin: 'auto',
    background: 'linear-gradient(180deg, rgba(41,46,70,1) 0%, rgba(44,44,116,1) 31%, rgba(33,179,209,1) 100%)',
    paddingTop: '.5rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const itemText: CSSProperties = {
    margin: 'auto',
    width: '90%',
    paddingTop: '2rem',
    fontSize: '2.1rem',
    display: 'flex',
    alignItems: 'center',
    color: '#e1e1e1',
}
export const AboutTechnologies = () => {

    return (
        <div style={{ ...container }}>
            <div className="display">

                <div>
                    <button style={{
                        margin: 'auto', padding: '1rem 3rem', backgroundColor: '#d8621f', display: 'block',
                        borderStyle: 'none', borderRadius: '20px', color: 'white', fontSize: '1.8rem'
                    }}>Desarrollo</button>
                    <div style={{ ...itemText }}>
                        <AiFillCheckCircle size="2.5rem" color="green" />
                        <p style={{ margin: '0 .5rem' }}>Basado en los estandares de la web</p>
                    </div>
                    <div style={{ ...itemText }}>
                        <AiFillCheckCircle size="2.5rem" color="green" />
                        <p style={{ margin: '0 .5rem' }}>Utilizamos los frameworks mas populares </p>
                    </div>
                    <div style={{ ...itemText }}>
                        <AiFillCheckCircle size="2.5rem" color="green" />
                        <p style={{ margin: '0 .5rem' }}>100% SEO friendly</p>
                    </div>
                </div>
                <div className="img">
                    <Image src={require('../../assets/img/herramientas.svg')} 
                    alt='tecnologias usadas'
                    />
                </div>
            </div>
        </div>
    )
}

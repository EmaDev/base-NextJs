import { CSSProperties, FC, useContext } from 'react';
import { BsCheck } from 'react-icons/bs';
import { FcCancel } from 'react-icons/fc';
import { GlobalContext } from '../../context';

interface Props {
  title: string;
  description: string;
  data?: any[];
  price?: { pay: number; month: number; };
}
const container: CSSProperties = {
  minWidth: '300px',
  minHeight: '90vh',
  margin: 'auto 2rem',
  padding: '2rem .5rem',
  borderRadius: '8px',
  boxShadow: '1px 1px 4px #2A2A2A',
  textAlign: 'center',
}
const content: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '10% 90%',
  alignItems: 'center',
  marginBottom: '.5rem'
}
const paragraph: CSSProperties = {
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
  textAlign: 'left',
  margin: 0,
  padding: 0,
  fontSize: '2rem'
}
const priceParagraph: CSSProperties = {
  margin: 0,
  padding: 0,
  fontSize: '2.1rem',
  fontWeight: 'bold',
  textAlign: 'start'
}
const button: CSSProperties = {

}
export const Plan: FC<Props> = ({ title, description, data = [], price = null }) => {

  const { themePalette } = useContext(GlobalContext);
  return (
    <div style={{ ...container, backgroundColor: themePalette.bgDefault }}>
      <h2 style={{ color: themePalette.textPrimary, fontSize: '3.5rem', margin: '1rem 0' }}>
        {title}</h2>
      <p style={{ margin: '.3rem 0', fontSize: '2rem', fontWeight: 'bold', color: '#d8621f' }}>{description}</p>
      <div style={{ margin: '1rem' }}>
        {
          data.map(item => (
            <div key={item.serv} style={{ ...content }}>
              {
                (item.ok) ?
                  <BsCheck size='2.5rem' color="green" />
                  :
                  <FcCancel size='2rem' color="red" />
              }
              <p style={{ ...paragraph, color: themePalette.textPrimary }}>{item.serv}</p>
            </div>
          ))
        }
      </div>
      {
        (price !== null) &&
        <div style={{marginTop: '3rem', color: themePalette.textPrimary}}>
          <div style={{
            display: 'grid', gridTemplateColumns: '60% 40%', margin: 'auto',
            padding: '0 2rem', alignItems: 'center'
          }}>
            <p style={{ ...priceParagraph, fontSize: '1.8rem' }}>Precio: </p>
            <p style={{ ...priceParagraph, textAlign: 'right' }}>{`u$s ${price.pay}`}</p>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '60% 40%', margin: 'auto',
            padding: '0 2rem', alignItems: 'center'
          }}>
            <p style={{ ...priceParagraph, fontSize: '1.8rem' }}>Mantenimiento: </p>
            <p style={{ ...priceParagraph, textAlign: 'right' }}>{`u$s ${price.month}`}</p>
          </div>
        </div>
      }
    </div>
  )
}

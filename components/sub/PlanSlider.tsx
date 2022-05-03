import React, { CSSProperties, useContext } from 'react';
import { GlobalContext } from '../../context';
import { Plan } from './Plan';

const container: CSSProperties = {
  minHeight: '100vh',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
const arr = [
  {
    title: 'Basico', description: 'Sitio Web Estatico',
    price: {pay: 98, month: 10},
    data:
      [{ serv: '100% SEO friendly', ok: true },
      { serv: 'HTML,Css,Java Script', ok: true },
      { serv: 'boton de Whats App', ok: true },
      { serv: 'Cerficado SSL', ok: true },
      { serv: 'Dominio personalizado', ok: true },
      { serv: 'Consumo de APIS externas', ok: true },
      { serv: 'autenticacion de usuario con Google', ok: false },
      { serv: 'panel de administracion', ok: false },
      ]
  },
  {
    title: 'Estandar', description: 'Sitio Web Dinamico',
    data:
      [{ serv: 'Caracteristicas del plan Basico', ok: true },
      { serv: 'MERN', ok: true },
      { serv: 'Consumo de APIS propias y externas', ok: true },
      { serv: 'Base de datos ilimitada', ok: true },
      { serv: 'autenticacion de usuario con Google', ok: true },
      { serv: 'panel de administracion', ok: true }
      ],
      price: {pay: 130, month: 15},
  },
  {
    title: 'Premium', description: 'Aplicaciones web ',
    data:
      [{ serv: 'Caracteristicas plan Basico y Estandar', ok: true },
      { serv: 'Marcado Pago API', ok: true },
      { serv: 'Paypal API', ok: true },
      { serv: 'Mail empresarial', ok: true },
      { serv: 'E-comerce', ok: true }
      ],
  }
];
export const PlanSlider = () => {

  const { themePalette } = useContext(GlobalContext);
  return (
    <div className='paddHor' style={{ ...container, backgroundColor: themePalette.bgPrimary }}>
      
      <div style={{ display: 'flex', overflowX: 'auto', alignItems: 'center', padding: '1rem 0' }}>
        {arr.map(plan => (
          <Plan key={plan.title} title={plan.title}
            description={plan.description}
            data={plan.data} 
            price={plan.price}
            />
        ))

        }
      </div>
    </div>
  )
}

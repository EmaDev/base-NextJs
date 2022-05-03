import { CSSProperties, useContext } from "react";
import { GlobalContext } from "../../context";
import { ExampleWebSite } from "./ExampleWebSite";

const container: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-.5rem',
  paddingBottom: '2rem',
  background: 'linear-gradient(180deg, rgba(33,179,209,1) 0%, rgba(103,114,148,1) 45%, rgba(45,48,58,1) 100%)'
}
export const Examples = () => {

  const { themePalette } = useContext(GlobalContext);
  return (
    <div style={{ ...container}}>
      <h1 style={{ textAlign: 'center', color: '#e1e1e1', marginBottom: 0}}>EJEMPLOS</h1>
      <h3 style={{ textAlign: 'center', margin: 0, padding: 0,color: '#e1e1e1' }}>Algunos modelos disponibles</h3>
      <div className="examplesWeb">
        <ExampleWebSite img='cafe' url='https://emadev.github.io/cafe/'/>
        <ExampleWebSite img='gim' url='https://emadev.github.io/gimnasio/' />
        <ExampleWebSite img='resto' url='https://emadev.github.io/menu-restaurante/' />
      </div>
    </div>
  )
}

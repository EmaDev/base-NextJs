import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import { Layout } from '../components/Layout';
import { AboutTechnologies } from '../components/sub/AboutTechnologies';
import { Examples } from '../components/sub/Examples';
import { Home } from '../components/sub/Home';
import { PlanSlider } from '../components/sub/PlanSlider';
import { Services } from '../components/sub/Services';
import { GlobalContext } from '../context';

const HomePage: NextPage = () => {

  const { setDarkTheme, themePalette, themeDark } = useContext(GlobalContext);
  return (
    <Layout title='Inicio'>
      <div style={{ backgroundColor: themePalette.bgSecondary }}>
        <Home/>
        <Services/>
        <AboutTechnologies/>
        <Examples/>
        <PlanSlider/>
      </div>
    </Layout>
  )
}

export default HomePage

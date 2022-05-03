import { FC, useContext } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { GlobalContext } from "../context";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
    title: string;
    description?: string;
    keywords?:string;
}

export const Layout: FC<Props> = ({ children, title,description = '' ,keywords=''}) => {
    
    const {menuActive, themePalette} = useContext(GlobalContext); 
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='author' content='Emanuel Cisterna' />
                <meta name='description' 
                content={(description !== '') ? description : `Informacion sobre ${title}`} />
                <meta name='keywords' content={`${title}, pagina web, sitios, web, e-comerce,html,css,${keywords}`} />
            </Head>
            {(menuActive) && <Navbar/>}
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

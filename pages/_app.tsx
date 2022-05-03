import type { AppProps } from 'next/app';
import { GlobalProvider } from '../context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://vciy8yllmrxu.usemoralis.com:2053/server"
      appId="7k7zCQOmnpPcfGxGxNJPmVaxUZxlOZU8xxFGujNR"
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  );
}

export default MyApp;

{
  /* <MoralisProvider
serverUrl={process.env.NEXT_PUBLIC_SERVER}
appId={process.env.NEXT_PUBLIC_APP_ID}
> */
}

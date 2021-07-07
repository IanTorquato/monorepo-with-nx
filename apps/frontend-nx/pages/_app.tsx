import { AppProps } from 'next/app';
import Head from 'next/head';

import {Header} from '@monorepo-nx-silbeck-clear/front-components';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend-nx!</title>
      </Head>

      <div className="app">
        <Header />

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;

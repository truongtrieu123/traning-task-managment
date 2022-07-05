import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import "../styles/app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Traning Task Management</title>
        <link rel="icon" href="/images/logo.svg" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </Provider>
    </div>
  );
}

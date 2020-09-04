import React from "react";
import App from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = ({ children }) => <>{children}</>;

    return (
      <Layout>
        <Head>
          <title>Site institucional com SSR.</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

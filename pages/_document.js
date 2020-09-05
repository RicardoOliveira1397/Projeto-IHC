import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="%PUBLIC_URL%/icon192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="%PUBLIC_URL%/icon512.png"
          />
          <link rel="shortcut icon" href="/next-wp/static/favicon.ico" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Aqui vai a descrição do site." />
          <meta http-equiv="content-language" content="pt-br" />

          {this.props.styleTags}
          <link href="/next-wp/static/styles.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:Extra-Bold, Thin"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="root"></div>
        </body>
      </html>
    );
  }
}

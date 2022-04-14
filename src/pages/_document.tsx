import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class Terminal extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name="theme-color" content="#282828" />
          <meta name="description" content="Software engineer building high performance and
		        availability systems, and focusing on impact and delivering innovative products." />

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          />
          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="/logo-icon-48.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/logo-icon-96.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="128x128"
            href="/logo-icon-128.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/logo-icon-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/logo-icon-152.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/logo-icon-192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/logo-icon-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/logo-icon-96.png"
          />
          <link rel="manifest" href="/manifest.json" />

          <title>Terminal · Kostadin Plachkov</title>

          <script
            dangerouslySetInnerHTML={{
              __html: `document.documentElement.classList.add('dark');`,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Terminal;

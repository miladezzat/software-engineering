/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export const siteTitle = 'Codegeek'


class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Codegeek, is a free website to learning software engineering" />
                    <meta name="keywords" content="HTML, CSS, JavaScript, node.js, node, mongo, mongodb, developer, Software Engineer" />
                    <meta name="author" content="Codegeek" />
                    <meta property="og:description" content="Codegeek, is a free website to learning software engineering" />
                    <meta name="twitter:description" content="Codegeek, is a free website to learning software engineering" />
                    <meta property="og:image" content="/images/profile.png" />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="/images/profile.png" />

                    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&display=optional" rel="stylesheet" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&display=optional" rel="stylesheet" type="text/css" />
                    <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin="anonymous"></script>

                    {/* for google search console */}
                    <meta name="google-site-verification" content="_-p2XdKwtGd6MPXJye2VTAIfwoQtDxLoelu7ojSoNqM" />


                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* <!-- Bootstrap core JS--> */}
                    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
                    {/* <!-- Core theme JS--> */}
                    <Script src='/scripts/scripts.js'></Script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
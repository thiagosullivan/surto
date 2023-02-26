import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;800&display=swap" rel="stylesheet"></link>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Primary Meta Tags */}
        <meta name="description" content="Surto - Marketing Inteligente" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nemeadvogados.adv.br/" />
        <meta property="og:description" content="Surto - Marketing Inteligente" />
        <meta property="og:image" content="https://i.ibb.co/ZxQ1JYf/neme-tag-img.jpg" />
        {/* Twitter */} 
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nemeadvogados.adv.br/" />
        <meta property="twitter:description" content="Surto - Marketing Inteligente" />
        <meta property="twitter:image" content="https://i.ibb.co/ZxQ1JYf/neme-tag-img.jpg"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="google-site-verification" content="eqks43F6FJwSXCXWBl_SNXV4PR3jEVjTMQummnEQLzs" />
          <meta name="description" content="Majid Yaghuti's official website" />
          <meta name="keywords" content="AFARINESHFERKRIFARAZ | آفرینش فکری فراز | Majid Yaghutiniat | مجید یاقوتی نیت" />
          <meta name="description"
            content="آفرینش فکری فراز: مجری ثبت شرکت با مسئولیت محدود،سهامی خاص،تضامنی ، ثبت موسسه و ثبت برند و ثبت اختراع در تهران و کلیه شهرهای ایران می باشد. 09153083449" />
          {/* <script type="application/ld+json">
            {
              "@context": "http://schema.org",
              "name": "afarineshfekrifaraz",
              "@type": "WebSite",
              "url": "https//:afarineshfekrifaraz.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://afarineshfekrifaraz.com/?s={search_term_string}",
                "query-input":"required name=search_term_string"
              }       
            }
          </script> */}
          <meta name="author" content="Ali Yaghutiniat" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" /> */}
          {/* <link rel="stylesheet" href="/static/css/globals.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
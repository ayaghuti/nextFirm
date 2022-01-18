import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title> ثبت شرکت | ثبت برند و علامت تجاری | آفرینش فکری فراز | مجید یاقوتی</title>

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
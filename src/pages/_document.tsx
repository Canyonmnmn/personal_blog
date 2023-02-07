import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

export default function Document() {
  useEffect(()=<{

  },[])
  return (
    <Html lang="en" className='dark:bg-black dark:text-white'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-01 14:34:11
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-08 21:17:39
 */
import '@/styles/globals.css'
import { ThemeProvider } from 'components/ThemeProvider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <ThemeProvider>
      <Component {...pageProps} />
  </ThemeProvider>
  )
}

/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-01 14:34:11
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-08 21:21:01
 */
import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/Header'
import Container from 'components/Container'
import Avatar from 'components/Intro/Avatar'
import Content from 'components/Intro/Content'


export default function Home() {
  
  return (
    <div className='min-h-[100vh] dark:bg-slate-900'>
      <Head>
      <title>My Site</title>
      </Head>
      <Header>
        <Container>
          <Avatar></Avatar>
          <Content></Content>
        </Container>
      </Header>
      
    </div>
  )
}

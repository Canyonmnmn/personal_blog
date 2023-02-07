/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-01 14:34:11
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 17:28:39
 */
import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/Header'
import Container from 'components/Container'
import Avatar from 'components/Intro/Avatar'
import Content from 'components/Intro/Content'


export default function Home() {
  return (
    <>
      <Head>
      <title>My Site</title>
      </Head>
      <Header>
        <Container>
          <Avatar></Avatar>
          <Content></Content>
        </Container>
      </Header>
      
    </>
  )
}

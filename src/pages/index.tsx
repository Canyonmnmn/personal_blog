/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-01 14:34:11
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 14:01:04
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
      <Header></Header>
      <Container>
        <Avatar></Avatar>
        <Content></Content>
      </Container>
    </>
  )
}

/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-12 17:18:35
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-12 19:23:16
 */
import Container from 'components/Container';
import Header from 'components/Header';
import Head from 'next/head';
import React from 'react'
import { getAllIds, getPostById } from 'utils/postTools';

export default function Post({ data }) {
    return (
        <div className='dark:bg-slate-900 transition-colors duration-500'>
            <Header>
                <Container>
                    <Head>
                        <title>{data.title}</title>
                    </Head>
                    <p className='text-3xl font-bold'>{data.title}</p>
                    <p className='text-lg mx-3 text-end text-gray-400'>{data.date}</p>
                    <article className='md'>
                        <div dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
                    </article>
                </Container>
            </Header>
        </div>
    )
}
export const getStaticPaths = async () => {
    const paths = await getAllIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const data = await getPostById(params.id);
    console.log(data);
    return {
        props: {
            data,
        },
    };
};
/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-07 14:12:05
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-12 17:48:25
 */
import BlogContent from "components/BlogContent";
import Header from "components/Header";
import Head from "next/head";
import { getSortedPostData } from "../../utils/postTools"

export default function blog({ allPostsData}) {
    return (
        <div className='min-h-[100vh] dark:bg-slate-900 transition-colors duration-500'>
            <Head>
                <title>Fiji&apos;s Blog</title>
            </Head>
            <Header>
                <BlogContent posts={ allPostsData }></BlogContent>
            </Header>
        </div>
    )
}

export async function getStaticProps() {
    const allPostsData = await getSortedPostData()
    console.log(allPostsData)
    return {
        props: {
            allPostsData
        }
    }
}


/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-12 17:43:07
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-12 18:20:41
 */
import Link from 'next/link'
import React from 'react'
import Container from './Container'

export default function BlogContent({ posts }) {
    return (
        <Container className="flex flex-col gap-5">
            {
                posts
                .filter(( post ) => post.date.includes("2022"))
                .map((post)=>(
                    <Link href={`/blog/${post.id}`}>
                        <div className='flex flex-col text-lg gap-1 p-3 rounded-md dark:hover:bg-slate-100/10 hover:bg-slate-100/50 ' key={ post.id }>
                            <p className='text-gray-700 dark:text-white'>{ post.title }</p>
                            <p className='text-gray-400'>{ post.date }</p>
                        </div>
                    </Link>
                    
                ))
            }
        </Container>
    )
}

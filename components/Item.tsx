/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-07 14:59:06
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-08 22:09:09
 */
import React from 'react'
type dataType = {
    name: string,
    description: string,
    icon: string,
    repo: string
}
export default function Item(props: dataType) {
    const { name, description, icon, repo } = props
    return (
        <a href={repo} rel='noreferrer' target='_blank'>
            <div className="flex justify-center items-center gap-3 text-gray-400 bg-slate-100/25 px-4 py-4 
            rounded-lg h-28 hover:bg-slate-100/50 dark:text-gray-400 dark:bg-slate-800">
                <span className="font-[iconfont] text-6xl dark:text-gray-200">{icon}</span>
                <div className="flex flex-col justify-between">
                    <p className="text-xl text-gray-700 dark:text-gray-200">{name}</p>
                    <p className="text-lg max-w-[300px]">{description}</p>
                </div>
            </div>
        </a>
    )
}

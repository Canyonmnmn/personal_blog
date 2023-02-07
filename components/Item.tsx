/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-07 14:59:06
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 17:53:13
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
            <div className="flex justify-center items-center gap-3 text-gray-400">
                <span className="font-[iconfont] text-6xl">{icon}</span>
                <div className="flex flex-col justify-between">
                    <p className="text-xl text-gray-700">{name}</p>
                    <p className="text-lg max-w-[300px]">{description}</p>
                </div>
            </div>
        </a>
    )
}

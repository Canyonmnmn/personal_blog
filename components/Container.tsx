/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-07 11:30:35
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-12 17:52:24
 */

import { ReactNode } from "react"
import clsx from "clsx"

type dataType={
    className?:string,
    children:ReactNode
}
function Container({ children,className }:dataType) {
    return (
        <div className={clsx("max-w-[920px] mx-auto mt-5 px-6 md:px-10 md:mt-1 box-border",className)}>{ children }</div>
    )
}
export default Container
/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-07 11:30:35
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 13:52:19
 */

import { ReactNode } from "react"

type dataType={
    children:ReactNode
}
function Container({ children }:dataType) {
    return (
        <div className="max-w-[920px] mx-auto mt-5 px-6 md:px-10 md:mt-1 box-border">{ children }</div>
    )
}
export default Container
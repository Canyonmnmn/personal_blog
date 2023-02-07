/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-07 11:38:19
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 11:53:56
 */
import Image from "next/image"
function Avatar() {
    return (
        <div className="flex gap-10">
            <Image 
            alt=""
            width={90}
            height={90}
            priority
            src='/avatar.JPG'
            className="rounded-2xl"
            ></Image>
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold text-slate-900">JIAN GUO</h1>
                <p className="text-xl text-slate-600">Front-End Developer / Worker / HangZhou</p>
            </div>
        </div>
    )
}
export default Avatar

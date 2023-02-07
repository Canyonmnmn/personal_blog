/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-06 21:41:41
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 11:29:18
 */
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx";
import { Fragment } from 'react'

function MobileNavIcon({ open }) {
    return (
        <svg
            aria-hidden="true"
            className="h-4 w-4 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0'
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0'
                )}
            />
        </svg>
    )
}

function MobileNavigation() {
    return (
        <Popover>
            <Popover.Button
                className={"relative z-10 flex h-8 w-8 items-center justify-center focus:outline-none"}>
                {({ open }) => {
                    // console.log(open);
                    return <MobileNavIcon open={open} />
                }}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Popover.Panel
                        as="div"
                        className={'absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg gap-3 tracking-tight text-slate-700 shadow-xl ring-1 ring-slate-900/5'}>
                        <Link href="/">Me</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Projects</Link>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

export default function Header() {
    return (
        <div className="mx-auto px-4 py-10">
            <nav className="relative flex items-center gap-5 z-50">
                <Image 
                    src="/xiong.png" 
                    width={40}
                    height={40}
                    priority
                    className="mr-auto"
                    alt={""}>
                </Image>
                <Link href="/" className="hidden md:flex items-center text-xl">Me</Link>
                <Link href="/" className="hidden md:flex items-center text-xl">Blog</Link>
                <Link href="/" className="hidden md:flex items-center text-xl">Projects</Link>
                <a
                    href='https://github.com/kelvinqiu802'
                    rel='noreferrer'
                    target='_blank'
                    className="font-[iconfont] text-3xl"
                >
                    &#xe885;
                </a>
                <span className="font-[iconfont] text-3xl">
                    &#xe635;
                </span>
                <div className="md:hidden -mr-1">
                    <MobileNavigation />
                </div>
            </nav>
        </div>
    )
}

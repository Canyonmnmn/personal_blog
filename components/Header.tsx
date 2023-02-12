/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-06 21:41:41
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-08 21:59:27
 */
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx";
import { Fragment, ReactNode, useContext} from 'react'
import { useThemeContext } from "./ThemeProvider";

type dataType = {
    children: ReactNode
}
function MobileNavIcon({ open }) {
    return (
        <svg
            aria-hidden="true"
            className="h-4 w-4 overflow-visible stroke-slate-700 dark:stroke-white"
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
                        className={'absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg gap-3 tracking-tight text-slate-700 dark:bg-slate-900 dark:text-white shadow-xl ring-1 ring-slate-900/5'}>
                        <Link href="/">Me</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Projects</Link>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

export default function Header({ children }: dataType) {
    const [ theme,setTheme ]= useThemeContext()
    return (
        <div className="mx-auto px-6 py-10 dark:text-white">
            <nav className="relative flex items-center gap-5 mb-10 ">
                <span className="font-Cedarville mr-auto text-2xl ">Fiji</span>
                <Link href="/" className="hidden md:flex items-center text-xl">Me</Link>
                <Link href="/blog" className="hidden md:flex items-center text-xl">Blog</Link>
                <Link href="/projects" className="hidden md:flex items-center text-xl">Projects</Link>
                <a
                    href='https://github.com/canyonmnmn'
                    rel='noreferrer'
                    target='_blank'
                    className="font-[iconfont] text-3xl"
                >
                    &#xe885;
                </a>
                <span
                    onClick={() => setTheme(theme == 'light' ? "dark":"light")}
                    className="font-[iconfont] text-3xl">
                    &#xe635;
                </span>
                <div className="md:hidden -mr-1">
                    <MobileNavigation />
                </div>
            </nav>
            {children}
        </div>
    )
}

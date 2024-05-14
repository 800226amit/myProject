'use client'
import React from 'react'
import Link from 'next/link'
import "../amit.css"
export default function Navigation() {
    return (
        <div className='text-blue-950 bg-blue-200  px-4 '>
            <nav className="bg-blue-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Web-Site Upchar</span>
                </Link>
                <div className='list-none text-2xl font-serif flex py-8 flex-row justify-end gap-8 p-4'>
                    <li className=''>
                        <Link href="/contentcomp/about" className="link">About</Link>
                    </li>
                    <li className=''>
                        <Link href="/contentcomp/contact" className="link" >Contact</Link>
                    </li>
                    <li className=''>
                        <Link href="/contentcomp/project" className="link" >Projects</Link>
                    </li>
                    <li className=' '>
                        <Link href="/contentcomp/blog" className="link">Blogs</Link>
                    </li>
                </div>
                </div>
            </nav>



    {/* 8088617672 */}


        </div>


    )
}

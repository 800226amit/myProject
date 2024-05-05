'use client'
import React from 'react'
import Link from 'next/link'
import "../amit.css"
export default function Navigation() {
    return (
        <div className='text-blue-950 bg-blue-200  px-4'>
            <nav className=''>
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
            </nav>



        </div>


    )
}

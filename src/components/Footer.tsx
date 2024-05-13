"use client";
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <footer className="flex flex-col space-y-10 justify-center m-10">

                <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                    <Link className='hover:text-primary font-semibold' href="/products">Products</Link>
                    <Link className='hover:text-primary font-semibold' href="/reviews">Reviews</Link>
                    <Link className='hover:text-primary font-semibold' href="/service">Service</Link>
                    <Link className='hover:text-primary font-semibold' href="/contact-us">Contact Us</Link>
                </nav>

                <p className="text-center text-gray-700 font-medium">&copy; 2024 Bajrang Enterprises All rights reservered.</p>
            </footer>
        </>
    )
}

export default Footer

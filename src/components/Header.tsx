"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/asset/logo.png'
import logo2 from "@/asset/logo02.png"
import { Button } from '@/components/ui/button'
import { LuPhoneCall } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InquireForm } from './InquireForm';
function Header() {
    return (
        <>
            <>
                <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50 ">
                <div className='bg-accent-foreground p-2 text-white text-center'>
                    Click <a className='underline' href="/catalouge.pdf" download>here</a> to download our catalogue
                </div>
                    <header className="flex h-16 w-full shrink-0 items-center justify-between px-2 md:px-8">
                        <Link className="mr-6" href="/">
                            <Image src={logo2} alt="logo" width={110} />
                            <span className="sr-only">Bajrang Enterprises</span>
                        </Link>

                        <nav className="flex items-center space-x-6 hidden md:block">
                            <Link className='hover:text-primary font-semibold' href="/products">Products</Link>
                            <Link className='hover:text-primary font-semibold' href="/reviews">Reviews</Link>
                            <Link className='hover:text-primary font-semibold' href="/service">Service</Link>
                            <Link className='hover:text-primary font-semibold' href="/contact-us">Contact Us</Link>
                        </nav>

                        <div className='flex items-center gap-2'>
                            <div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button>
                                            <LuPhoneCall className="mr-2" />
                                            <span>Inquire Now</span>
                                        </Button>
                                    </DialogTrigger>
                                    <InquireForm></InquireForm>
                                </Dialog>
                            </div>

                            <div className='block md:hidden'>


                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant={'ghost'} className='text-3xl hover:text-primary'>
                                            <RiMenu3Line />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-dvw mt-2">
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <nav className='flex flex-col gap-3'>
                                                    <Link className='hover:text-primary font-semibold' href="/products">Products</Link>
                                                    <Link className='hover:text-primary font-semibold' href="/reviews">Reviews</Link>
                                                    <Link className='hover:text-primary font-semibold' href="/service">Service</Link>
                                                    <Link className='hover:text-primary font-semibold' href="/contact-us">Contact Us</Link>
                                                </nav>
                                            </div>

                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>



                    </header>
                </div>
            </>
        </>
    )
}

export default Header

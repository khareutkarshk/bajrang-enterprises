"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import laser00 from "@/asset/laser-cutting00.png"
import laser01 from "@/asset/laser-cutting01.png"
import laser02 from "@/asset/laser-cutting02.png"
import laser03 from "@/asset/laser-cutting04.png"

import marking00 from "@/asset/marking00.png"
import marking01 from "@/asset/marking01.png"

import welding00 from "@/asset/welding00.png"
import welding01 from "@/asset/welding01.png"
import welding02 from "@/asset/welding02.png"

import bending00 from "@/asset/bending00.png"
import bending01 from "@/asset/bending01.png"
import bending02 from "@/asset/bending02.png"

import router00 from "@/asset/router00.png"
import router01 from "@/asset/router01.png"

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { InquireForm } from './InquireForm'
import { useState } from 'react';
function ProductPage() {
    const [data, setData] = useState([
        {
            name: 'Laser Cutting',
            img: laser00
        },
        {
            name: 'Laser Cutting',
            img: laser01
        },
        {
            name: 'Laser Cutting',
            img: laser02
        },
        {
            name: 'Laser Cutting',
            img: laser03
        },
        {
            name: 'Marking Machine',
            img: marking00
        },
        {
            name: 'Marking Machine',
            img: marking01
        },
        {
            name: 'Welding Machine',
            img: welding00
        },
        {
            name: 'Welding Machine',
            img: welding01
        },
        {
            name: 'Welding Machine',
            img: welding02
        },
        {
            name: 'Bending Machine',
            img: bending00
        },
        {
            name: 'Bending Machine',
            img: bending01
        },
        {
            name: 'Bending Machine',
            img: bending02
        },
        {
            name: 'Router Machine',
            img: router00
        },
        {
            name: 'Router Machine',
            img: router01
        }
    ])
    return (
        <>
            <div className=" mx-auto overflow-hidden bg-slate-100 relative py-6">
                <div className="flex  justify-center flex-col px-4">
                    <div className="pb-2 text-center">
                        <h2 className="font-display text-3xl tracking-tight w-full text-slate-900 sm:text-4xl">
                            Explore Our Full Lineup of Laser Machines</h2>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 w-full lg:px-20 px-5'>

                {
                    data.map((item:any) => (
                        <Dialog>
                        <DialogTrigger asChild>

                            <article className="relative cursor-pointer w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                                <Image src={item.img} alt="University of Southern California" className="absolute inset-0 h-full w-full" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{item.name}</h3>
                                <div className="z-10 gap-y-1 overflow-hidden underline text-sm leading-6 text-gray-300">Learn More</div>
                            </article>
                        </DialogTrigger>
                        <InquireForm></InquireForm>
                    </Dialog>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default ProductPage

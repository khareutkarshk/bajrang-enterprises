"use client";
import React from 'react'
import Header from './Header'
import Image from 'next/image';
import banner from '@/asset/banner.jpg'
import { Separator } from './ui/separator';
import { Button } from './ui/button';
function Home() {
    return (
        <>
            <Header></Header>

            <div className="h-screen mt-16 mx-auto overflow-hidden ">
                <Image
                    src={banner}
                    alt="banner"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-1/2 right-20 transform -translate-x-0 -translate-y-1/4 text-white font-bold">
                    <h1 className='text-5xl'>
                        High Performance <span className='text-primary'>Laser</span> Cutting Machines
                    </h1>
                    <div className='text-xl flex items-center mt-5 justify-end font-light'>
                        <span>
                            Rapid Speed
                        </span>
                        <div className="border-l-2 h-5 mx-3 border-white"></div>
                        <span>
                            High Precision
                        </span>
                        <div className="border-l-2 h-5 mx-3 border-white"></div>

                        <span>
                            Low Maintenance
                        </span>
                    </div>
                    <div className='flex justify-end mt-6 text-3xl'>
                        Your Vision, Our Expertise
                    </div>
                    <div className='flex justify-end mt-6 text-'>

                        <Button className='bg-transparent text-muted text-xl font-semibold border-2 border-primary'>Learn More</Button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home

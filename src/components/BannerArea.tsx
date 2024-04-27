"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import banner from '@/asset/banner.jpg'

function BannerArea() {
  return (
    <>
    <div className="h-screen mx-auto overflow-hidden relative">
                <Image
                    src={banner}
                    alt="banner"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black opacity-70 to-transparent md:bg-transparent"></div>
                <div className="absolute md:top-1/2 top-1/4 md:right-20 transform md:-translate-x-0 md:-translate-y-1/4 px-6 right-0 text-white font-bold">
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
                    <div className='flex justify-end mt-6 text-'>

                        <Button className='bg-transparent text-muted text-xl font-semibold border-2 border-primary'>Learn More</Button>
                    </div>
                </div>
            </div>

    </>
  )
}

export default BannerArea

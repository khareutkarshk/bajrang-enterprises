"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import banner from '@/asset/banner.jpg'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import slide0 from "@/asset/slide00.png"
import slide1 from "@/asset/slide01.png"
import slide2 from "@/asset/slide02.png"
import slide3 from "@/asset/slide03.png"

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { InquireForm } from './InquireForm';


function BannerArea() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )


    return (
        <>

            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                    loop: true
                }}
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="relative h-screen">
                            <Image
                                src={slide0}
                                alt="Carousel Slide"
                                layout="fill"
                                objectPosition="center"
                                className='h-full w-full object-cover'
                            />
                            <div className="absolute md:top-1/2 top-20 md:left-20 transform md:-translate-y-1/2 px-6 text-white font-bold">
                                <h1 className='text-5xl font-semibold '>
                                    UNLEASH YOUR CREATIVITY <br /> WITH <span className='text-primary'>CONFIDENCE</span>
                                </h1>
                                <hr className="border-t-2 w-1/3 border-primary mt-6" />
                                <div className='text-xl flex items-center mt-5 justify-start font-light'>
                                    <span className='capitalize'>
                                        We have got you covered for <span className="text-primary">2 years.</span>  <br />
                                        our <span className="text-primary">extended warranty</span>  keeps you creating, worry-free
                                    </span>
                                </div>
                                <div className='flex justify-start mt-6 text-'>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                                <Button className='bg-transparent text-muted text-xl font-semibold border-2 border-primary'>Learn More</Button>

                                        </DialogTrigger>
                                        <InquireForm></InquireForm>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>



                    <CarouselItem>
                        <div className="p-1">
                            <div className="h-screen mx-auto overflow-hidden relative">
                                <Image
                                    src={slide1}
                                    alt="banner"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute md:top-1/2 top-20 md:left-20 transform md:-translate-y-1/2 px-6 text-white font-bold">
                                    <h1 className='text-5xl font-semibold uppercase '>
                                        Laser Focused <br /> on <span className='text-primary'>Your Success !</span>
                                    </h1>
                                    <hr className="border-t-2 w-1/3 border-primary mt-6" />
                                    <div className='text-xl flex items-center mt-5 justify-start font-light'>
                                        <span className='capitalize'>
                                            <span className="text-primary">2 years Free Maintenance </span>
                                            Ensures Peak peak performance
                                        </span>
                                    </div>
                                    <div className='flex justify-start mt-6 text-'>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                                <Button className='bg-transparent text-muted text-xl font-semibold border-2 border-primary'>Learn More</Button>

                                        </DialogTrigger>
                                        <InquireForm></InquireForm>
                                    </Dialog>                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="p-1">
                            <div className="h-screen mx-auto overflow-hidden relative">
                                <Image
                                    src={slide3}
                                    alt="banner"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute md:top-1/2 top-20 md:left-20 transform md:-translate-y-1/2 px-6 text-white font-bold">
                                    <h1 className='text-5xl font-semibold uppercase'>
                                        <span className='text-primary'>Secure</span> year-round <br /> performance
                                    </h1>
                                    <hr className="border-t-2 w-1/3 border-primary mt-6" />
                                    <div className='text-xl flex items-center mt-5 justify-start font-light'>
                                        <span className='capitalize'>
                                            Get an <span className="text-primary">annual Maintenance plan</span>  for your CNC Laser today !
                                        </span>
                                    </div>
                                    <div className='flex justify-start mt-6 text-'>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                                <Button className='bg-transparent text-muted text-xl font-semibold border-2 border-primary'>Learn More</Button>

                                        </DialogTrigger>
                                        <InquireForm></InquireForm>
                                    </Dialog>                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="p-1">
                            <div className="h-screen mx-auto overflow-hidden relative">
                                <Image
                                    src={slide2}
                                    alt="banner"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute md:top-1/2 top-16 md:left-20 transform md:-translate-y-1/2 px-6 text-white font-bold">
                                    <h1 className='text-5xl font-semibold uppercase'>
                                    {"Don't just buy a machine, "} <br /> get a  <span className='text-primary'>partnership</span>
                                    </h1>
                                    <hr className="border-t-2 w-1/3 border-primary mt-6" />
                                    <div className='text-sm flex items-center mt-5 font-light'>
                                        <span>
                                            Calibration
                                        </span>
                                        <div className="border-l-2 h-5 mx-3 border-white"></div>
                                        <span>
                                            Cleaning
                                        </span>
                                        <div className="border-l-2 h-5 mx-3 border-white"></div>
                                        <span>
                                            Inspection
                                        </span>
                                        <div className="border-l-2 h-5 mx-3 border-white"></div>
                                        <span>
                                            Adjustments
                                        </span>
                                    </div>
                                    <div className='text-xl flex items-center mt-5 justify-start font-light'>
                                        <span className='capitalize'>
                                            <span className="text-primary">4 Preventive Services</span>  {"Expand your laser's life !"}
                                        </span>
                                    </div>
                                    <div className='flex justify-start mt-6 text-'>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                                <Button className='bg-transparent text-muted text-xl font-semibold border-2 border-primary'>Learn More</Button>

                                        </DialogTrigger>
                                        <InquireForm></InquireForm>
                                    </Dialog>                                    </div>
                                </div>

                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>

        </>
    )
}

export default BannerArea

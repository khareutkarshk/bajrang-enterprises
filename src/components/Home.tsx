"use client";
import React from 'react'
import Header from './Header'
import Image from 'next/image';
import banner from '@/asset/banner.jpg'
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import BannerArea from './BannerArea';
import ProductArea from './ProductArea';
import Testimonials from './Testimonials';
import Footer from './Footer';
function Home() {
    return (
        <>
            <BannerArea></BannerArea>
            <ProductArea></ProductArea>
            <Testimonials></Testimonials>
        </>

    )
}

export default Home

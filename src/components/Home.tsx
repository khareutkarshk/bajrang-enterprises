"use client";
import React from 'react'
import Header from './Header'
import Image from 'next/image';
import banner from '@/asset/banner.jpg'
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import BannerArea from './BannerArea';
import ProductArea from './ProductArea';
function Home() {
    return (
        <>
            <Header></Header>
            <BannerArea></BannerArea>
            <ProductArea></ProductArea>
        </>

    )
}

export default Home

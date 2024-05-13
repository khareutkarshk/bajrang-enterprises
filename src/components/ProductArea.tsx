"use client";
import React from "react";
import laserCuttingMachine from "@/asset/cnc-laser-cutting-machine.webp";
import bending from "@/asset/bending-machine.jpg";
import laserWelding from "@/asset/laser-welding.jpeg";
import markingMachine from "@/asset/marking-machine.png";
import routerMachine from "@/asset/router-machine.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import laser00 from "@/asset/laser-cutting00.png"
import welding00 from "@/asset/welding00.png"
import marking00 from "@/asset/marking00.png"
import bending00 from "@/asset/bending00.png"
import router00 from "@/asset/router00.png"
import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InquireForm } from './InquireForm'

function ProductArea() {

  const [data, setData] = useState([
    {
      id: 1,
      name: 'Laser Cutting',
      img: laser00
    },

    {
      id: 2,
      name: 'Marking Machine',
      img: marking00
    },

    {
      id: 3,
      name: 'Welding Machine',
      img: welding00
    },

    {
      id: 4,
      name: 'Bending Machine',
      img: bending00
    },

    {
      id: 5,
      name: 'Router Machine',
      img: router00
    },

  ])

  return (
    <div className="bg-slate-100">
      {/* make this product area screen size height */}
      <div className="flex pt-8 justify-center flex-col px-4">
        <div className=" text-center">
          <h2 className="font-display text-3xl tracking-tight w-full text-slate-900 sm:text-4xl">Complete Range of Laser Cutting Machines</h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full lg:px-20 px-5">


        {
          data.map((item: any) => (
            <Dialog key={item.id}>
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
  );
}

export default ProductArea;

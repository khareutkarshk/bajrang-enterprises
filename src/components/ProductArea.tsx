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
function ProductArea() {
  return (
    <>
      {/* make this product area screen size height */}
      <div className=" mx-auto overflow-hidden bg-slate-100 relative py-6">
        <div className="flex py-8 justify-center flex-col px-4">
          <div className="pb-2 text-center">
            <h2 className="font-display text-3xl tracking-tight w-full text-slate-900 sm:text-4xl">Complete Range of Laser Cutting Machines</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full lg:px-20 px-5">
          <div className="flex items-center justify-center mt-12">
            <Link
              className="relative  sm:block hidden w-full bg-gray-900 group"
              href={""}
            >
              <Image
                className="absolute inset-0 object-cover 
                    w-full h-full group-hover:opacity-50"
                src={laserCuttingMachine}
                alt="Laser Cutting machine"
              ></Image>
              <div className="relative p-5">
                <div className="mt-40">
                  {/* Hidden content */}
                  <div
                    className="transition-all transform ease-linear
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <p className="text-lg text-white">
                        Laser Cutitng Machine
                      </p>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </Link>
            <div className="sm:hidden">
              <Image
                src={laserCuttingMachine}
                alt="Laser Cutting machine"
              ></Image>
              <div className="text-lg font-bold text-center">
                Laser Cutitng Machine
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12">
            <Link
              className="relative sm:block hidden w-3/4 bg-gray-900 group"
              href={""}
            >
              <Image
                className="absolute inset-0 object-cover 
                    w-full h-full group-hover:opacity-50"
                src={markingMachine}
                alt="Laser Cutting machine"
              ></Image>
              <div className="relative p-5">
                <div className="mt-40">
                  {/* Hidden content */}
                  <div
                    className="transition-all transform ease-linear
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <p className="text-lg text-white">Marking Machine</p>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </Link>
            <div className="sm:hidden">
              <Image
                src={markingMachine}
                alt="Laser Cutting machine"
                className="w-80"

              ></Image>
              <div className="text-lg font-bold text-center">
                Marking Machine
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12">
            <Link
              className="relative w-full sm:block hidden bg-gray-900 group"
              href={""}
            >
              <Image
                className="absolute inset-0 object-cover 
                    w-full h-full group-hover:opacity-50"
                src={bending}
                alt="Laser Cutting machine"
              ></Image>
              <div className="relative p-5">
                <div className="mt-40">
                  {/* Hidden content */}
                  <div
                    className="transition-all transform ease-linear
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <p className="text-lg text-white">Bending Machine</p>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </Link>
            <div className="sm:hidden">
              <Image
                src={bending}
                alt="Laser Cutting machine"
              ></Image>
              <div className="text-lg font-bold text-center">
                Bending Machine
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12">
            <Link
              className="relative sm:block hidden bg-gray-900 group"
              href={""}
            >
              <Image
                className="absolute inset-0 object-cover 
                    w-full h-full group-hover:opacity-50"
                src={laserWelding}
                alt="Laser Cutting machine"
              ></Image>
              <div className="relative p-5">
                <div className="mt-40">
                  {/* Hidden content */}
                  <div
                    className="transition-all transform ease-linear
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <p className="text-lg text-white">
                        Laser Welding Machine
                      </p>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </Link>
            <div className="sm:hidden">
              <Image
                src={laserWelding}
                alt="Laser Welding machine"
              ></Image>
              <div className="text-lg font-bold text-center">
                Laser Welding Machine
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12">
            <Link
              className="relative sm:block hidden w-full bg-gray-900 group"
              href={""}
            >
              <Image
                className="absolute inset-0 object-cover 
                    w-full h-full group-hover:opacity-50"
                src={routerMachine}
                alt="Laser Cutting machine"
              ></Image>
              <div className="relative p-5">
                <div className="mt-40">
                  {/* Hidden content */}
                  <div
                    className="transition-all transform ease-linear
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <p className="text-lg text-white">Router Machine</p>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </Link>
            <div className="sm:hidden">
              <Image
                src={routerMachine}
                alt="Laser Cutting machine"
              ></Image>
              <div className="text-lg font-bold text-center">
                Router Machine
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductArea;

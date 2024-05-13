"use client";
import { Button } from './ui/button';
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

function Contact() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data: any) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/inquire', data);
      console.log(response.data);
      const mail = await axios.post('/api/send', data);
      toast.success("We've got your inquiry and will be in touch shortly.", { duration: 5000 })
      setLoading(false);
    } catch (error) {
      toast.error("An error occurred while submitting your inquiry")
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <>
      <section className="mb-32">
        <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
      width="100%" height="480" className='border-0'  allowFullScreen loading="lazy"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.1339353999747!2d77.12209697550057!3d28.62574767566838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzMyLjciTiA3N8KwMDcnMjguOCJF!5e0!3m2!1sen!2sin!4v1715533826169!5m2!1sen!2sin" width="100%" height="480" className='border-0' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container px-6 md:px-12">
          <div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="text"
                      {...register('name', { required: true })}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput90" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput90">Name
                    </label>
                    <div className="col-span-4  text-end">
                      {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    </div>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      {...register('email', { required: true })}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput91">Email address
                    </label>
                    <div className="col-span-4  text-end">
                      {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    </div>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      {...register('phone', { required: true })}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput91">Phone
                    </label>
                    <div className="col-span-4  text-end">
                      {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    </div>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      {...register('location', { required: true })}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput91">Location
                    </label>
                    <div className="col-span-4  text-end">
                      {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    </div>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      {...register('message', { required: true })}

                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlTextarea1" rows={3}></textarea>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
                    <div className="col-span-4  text-end">
                      {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    </div>
                  </div>
                  <Button className='w-full'>
                    Send
                  </Button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">
                          Technical support
                        </p>
                        <p className="text-sm text-neutral-500">
                          enterprisesbajrang0@gmail.com
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">
                          Address
                        </p>
                        <p className="text-sm capitalize text-neutral-500">
                          Demonstrating office-B 66 <br /> myapuri industrial area, <br /> 110064
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

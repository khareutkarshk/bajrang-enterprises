"use client"
import React from 'react'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { Button } from './ui/button'
import axios from 'axios'
import { Input } from './ui/input'
import { useEffect } from 'react'
import { set } from 'mongoose'
import { Separator } from "@/components/ui/separator"
import { compareAsc, format } from "date-fns";
import toast, { Toaster } from 'react-hot-toast';

function ReviewPage() {
    const [rating, setRating] = useState(0)
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState<any[]>([])

    const handleRating = (rate: number) => {
        setRating(rate)
        console.log(rating);


    }

    const handleFormSubmit = async (data: any) => {
        console.log(data, rating);
        try {
            setLoading(true)
            const req = await axios.post('/api/post-review', { ...data, rating })
            console.log(req.data);
            setLoading(false)
            toast.success("Review submitted successfully",  { duration: 5000 })
            fetchReviews()
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    const fetchReviews = async () => {
        try {
            const req = await axios.get('/api/get-review')
            setReviews(req.data.data)
            console.log(req.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [])
    return (
        <>
            <section className="py-8 relative bg-slate-100">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                    <div className="">
                        <h2 className="tracking-tight text-slate-900 text-3xl sm:text-4xl text-center">
                            Customer reviews &
                            rating</h2>

                        {/* form with write a message text area */}
                        <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="flex w-full flex-col gap-4">

                                <ul role="list"
                                    className="mx-auto mt-16 w-full max-w-2xl gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                                    <li>
                                        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                            <li>
                                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                                    <blockquote className="relative">
                                                        <div className="text-lg tracking-tight text-slate-900">
                                                            <Label className='text-xl pb-3 tracking-tight text-slate-900'>Rate us</Label>
                                                            <div className='flex gap-3'>

                                                                {[...Array(5)].map((star, i) => {
                                                                    const ratingValue = i + 1;
                                                                    return (
                                                                        <label key={i}>
                                                                            <input
                                                                                type="radio"
                                                                                name="rating"
                                                                                value={ratingValue}
                                                                                onClick={() => handleRating(ratingValue)}
                                                                                className="hidden"
                                                                            />
                                                                            <FaStar
                                                                                className={ratingValue <= rating ? "text-amber-400" : "text-gray-300"}
                                                                                size={30}
                                                                            />
                                                                        </label>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100">
                                                        <div className='w-full'>

                                                            <div className="flex flex-col gap-3 mb-4">
                                                                <div>
                                                                    <Label htmlFor="name" className="text-lg tracking-tight text-slate-900">
                                                                        Name
                                                                    </Label>
                                                                </div>

                                                                <div>
                                                                    <Input
                                                                        id="name"
                                                                        placeholder="Enter Your Full Name"
                                                                        {...register('name', { required: true })}
                                                                        className="w-full" />
                                                                    <div className="col-span-4  text-end">
                                                                        {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="font-display text-base text-slate-900">
                                                                <div className="flex-1">
                                                                    <Label className='text-lg pb-4 mb-6 tracking-tight text-slate-900' htmlFor='message'>Write a review</Label>
                                                                    <br />
                                                                    <Textarea
                                                                        {...register("message", { required: "Review is required" })}
                                                                        placeholder="Write a review..."
                                                                        className="w-full mt-4"
                                                                        rows={5}
                                                                        id='message'
                                                                    />
                                                                    {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                                                                </div>
                                                            </div>
                                                            <div className='mt-6'>
                                                                <Button>{
                                                                    loading ? 'Loading...' : 'Submit'

                                                                }</Button>
                                                            </div>
                                                        </div>

                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </li>


                                </ul>



                            </div>
                        </form>

                        <div className="py-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
                            <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">Recent
                                reviews</h4>

                            {reviews.map((review: any) => (
                                <div className='mb-6 p-3' key={review._id}>


                                    <div className="flex sm:items-center flex-col sm:flex-row justify-between  mb-4">
                                        <div className="flex items-center gap-3">
                                            {[...Array(Number(review?.rating))].map((star, i) => {
                                                return (
                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2974)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2974">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                )
                                            })}


                                        </div>
                                        <div className="flex items-center gap-3">
                                            <h6 className="font-semibold text-lg leading-8 text-black">@{review.name}</h6>
                                            <p className="font-medium text-base leading-7 text-gray-400"> {format(new Date(review.createdAt), 'MMM dd, yyyy')}</p>
                                        </div>
                                    </div>

                                    <p className="font-normal text-lg leading-8 text-gray-500 ">
                                        {review.message}
                                    </p>

                                    <Separator />
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ReviewPage

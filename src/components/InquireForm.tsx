"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
export function InquireForm() {
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
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Request a Quote</DialogTitle>
                    <DialogDescription>
                        {"Whether you're seeking general advice or targeted assistance, we're here and ready to assist."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                placeholder="Enter Your Full Name"
                                {...register('name', { required: true })}
                                className="col-span-3" />
                            <div className="col-span-4  text-end">
                                {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Phone" className="text-right">
                                Phone
                            </Label>
                            <Input
                                id="Phone"
                                placeholder="Enter Your Mobile Number"
                                className="col-span-3"
                                {...register('phone', { required: true })}
                            />
                            <div className="col-span-4 text-end">
                                {errors.phone && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="Email"
                                placeholder="Enter Your Mobile Number"
                                className="col-span-3"
                                {...register('email', { required: true })}
                            />
                            <div className="col-span-4 text-end">
                                {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="location" className="text-right">
                                Location
                            </Label>
                            <Input
                                id="location"
                                placeholder="Enter Your Location"
                                className="col-span-3"
                                {...register('location', { required: true })}

                            />
                            <div className="col-span-4  text-end">
                                {errors.location && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="message" className="text-right">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Enter Your Message"
                                className="col-span-3"
                                {...register('message', { required: true })}
                            />
                            <div className="col-span-4  text-end">
                                {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">
                        {
                                loading ? 'Processing...' : 'Submit'
                            
                        }
                        </Button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </>
    )
}

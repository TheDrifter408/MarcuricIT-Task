"use client"
import { Records } from "@/types"
import { SubmitHandler, useForm } from "react-hook-form"
import { records } from "../data"
export default function Form(){
    const { register, formState: { errors }, handleSubmit } = useForm<Records>();

    const onSubmit: SubmitHandler<Records> = (data) => {
        const newIndex = records[records.length - 1].id + 1;
        data.id = newIndex;
        records.push(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="w-1/4 flex items-center gap-4 ">
                <label className="w-16 font-semibold my-4" htmlFor="name">Name:</label>
                <input className="border border-gray-300 p-1 rounded" type="text" {...register("name",{pattern:/[A-Za-z]/,required:true})} aria-invalid={errors.name ? "true" : "false"} id="name" placeholder="Name" />
            </div>
            {
                errors.name?.type === "required" && (
                    <p className="text-sm ml-16 text-red-600" role="alert">First Name is required</p>
                )
            }
            <div className="w-1/4 flex items-center gap-4 my-4">
                <label className="w-16 font-semibold" htmlFor="phone">Phone:</label>
                <input className="border border-gray-300 p-1 rounded" type="tel" {...register("phone",{required:true,pattern:/^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/})} id="phone" aria-invalid={errors.phone ? "true" : "false"} />
            </div>
            {
                errors.phone?.type === "required" && (
                    <p className="text-sm ml-16 text-red-600" role="alert">Phone Number is required</p>
                )
            }
            <div className="w-1/4 flex items-center gap-4 my-4">
                <label className="w-16 font-semibold" htmlFor="age">Age:</label>
                <input className="border border-gray-300 p-1 rounded" type="number" {...register("age",{min:18,required:true})} id="age" min="18"  />
            </div>
            {
                errors.phone?.type === "required" && (
                    <p className="text-sm ml-16 text-red-600" role="alert">Age is required</p>
                )
            }
            <div className="w-1/4 flex items-center gap-4 my-4">
                <label className="w-16 font-semibold" htmlFor="age">Company:</label>
                <input className="border border-gray-300 p-1 rounded" type="text" {...register("company",{required:true})} id="company" placeholder="Company Name" />
            </div>
            {
                errors.company?.type === "required" && (
                    <p className="text-sm ml-16 text-red-600" role="alert">Company is required</p>
                )   
            }
            <input className="bg-indigo-600 text-white p-3 rounded-xl" type="submit" />
        </form>
    )
}
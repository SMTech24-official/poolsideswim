"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SharedButton from "./shared/SharedButton";

interface Inputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  booking: string;
  courseName: string;
  participants: string;
}

const RequestAQuooreForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="container grid gap-10">
      <h2 className="text-[#000B33] text-2xl font-semibold leading-7 text-center">
        Please Complete the Form Below to get a Quote:
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <div className="grid gap-4">
          <label
            htmlFor="name"
            className="text-base font-medium leading-[25px] text-carbon"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="px-4 py-5 text-gray bg-gray4 rounded-lg"
            {...register("name", { required: true })}
          />
        </div>
        <div className="md:flex gap-6 w-full">
          <div className="grid gap-4 w-full">
            <label
              htmlFor="email"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              Email address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid gap-4 w-full">
            <label
              htmlFor="phone"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              Phone number*
            </label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your phone"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("phone", { required: true })}
            />
          </div>
        </div>
        <div className="md:flex gap-6 w-full">
          <div className="grid gap-4 w-full">
            <label
              htmlFor="address"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              Address*
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("address", { required: true })}
            />
          </div>
          <div className="grid gap-4 w-full">
            <label
              htmlFor="city"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              City*
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("city", { required: true })}
            />
          </div>
        </div>
        <div className="md:flex gap-6 w-full">
          <div className="grid gap-4 w-full">
            <label
              htmlFor="booking"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              Booking date*
            </label>
            <input
              type="text"
              id="booking"
              placeholder="mm/dd/yy"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("booking", { required: true })}
            />
          </div>
          <div className="grid gap-4 w-full">
            <label
              htmlFor="courseName"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              Type of course*
            </label>
            <input
              type="text"
              id="courseName"
              placeholder="Enter your course name"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("courseName", { required: true })}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <label
            htmlFor="participants"
            className="text-base font-medium leading-[25px] text-carbon"
          >
            Number of participants*
          </label>
          <input
            type="number"
            id="participants"
            placeholder="Enter number of participants"
            className="px-4 py-5 text-gray bg-gray4 rounded-lg"
            {...register("participants", { required: true })}
          />
        </div>
        <div className="flex justify-center mt-4">
          <SharedButton type="submit" text="submit" />
        </div>
      </form>
    </div>
  );
};

export default RequestAQuooreForm;

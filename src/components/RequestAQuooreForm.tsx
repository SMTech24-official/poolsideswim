"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SharedButton from "./shared/SharedButton";
import { useSendContactMutation } from "@/redux/api/contactApi";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  message: string;
}

const RequestAQuooreForm = () => {
  const pathname = usePathname();
  const routeName = pathname.split("/").pop();
  // console.log(routeName);
  const [sendContact] = useSendContactMutation();
  const subject = routeName;
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await sendContact({ subject, ...data }).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container grid gap-10">
      <h2 className="text-[#000B33] text-2xl font-semibold leading-7 text-center">
        Please Complete the Form Below to get a Quote:
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <div className="md:flex gap-6 w-full">
          <div className="grid gap-4 w-full">
            <label
              htmlFor="firstName"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="grid gap-4 w-full">
            <label
              htmlFor="lastName"
              className="text-base font-medium leading-[25px] text-carbon"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="px-4 py-5 text-gray bg-gray4 rounded-lg"
              {...register("lastName", { required: true })}
            />
          </div>
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
        <div className="grid gap-4">
          <label
            htmlFor="message"
            className="text-base font-medium leading-[25px] text-carbon"
          >
            Message*
          </label>
          <textarea
            rows={10}
            id="message"
            placeholder="Enter your message"
            className="px-4 py-5 text-gray bg-gray4 rounded-lg"
            {...register("message", { required: true })}
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

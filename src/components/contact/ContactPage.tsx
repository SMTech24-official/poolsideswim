"use client";

import Image from "next/image";
import React from "react";
import locationIcon from "@/assets/contact/location-icon.svg";
import phoneIcon from "@/assets/contact/phone-icon.svg";
import emailIcon from "@/assets/contact/email-icon.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import SharedButton from "../shared/SharedButton";
import { useSendContactMutation } from "@/redux/api/contactApi";
import { toast } from "sonner";

interface Inputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [sendContact] = useSendContactMutation();
  const subject = "contact";
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
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
    <div className="container">
      <div className="grid xl:flex gap-10 justify-between items-start">
        {/* left column */}
        <div className="grid gap-10">
          <h2 className="text-black text-[32px] font-bold leading-[38px]">
            Contact Information
          </h2>
          <div className="grid gap-10">
            <div className="flex items-center gap-4">
              <Image
                width={24}
                height={24}
                src={locationIcon}
                alt="Location Icon"
              />
              <p className="text-xl md:text-2xl leading-[28px] text-gray">
                Oakville, ON
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image width={24} height={24} src={phoneIcon} alt="Phone Icon" />
              <p className="text-xl md:text-2xl leading-[28px] text-gray">
                +1 905 582 7702
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image width={24} height={24} src={emailIcon} alt="Email Icon" />
              <p className="text-xl md:text-2xl leading-[28px] text-gray">
                {" "}
                poolsideswimmng@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* right column */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-3 md:flex items-center md:gap-6">
            <div className="grid gap-2 md:w-[354px]">
              <label
                htmlFor="firstName"
                className="text-base text-carbon font-medium leading-5 capitalize"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
                className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg"
                placeholder="Your first name"
              />
            </div>
            <div className="grid gap-2 md:w-[354px]">
              <label
                htmlFor="lastName"
                className="text-base text-carbon font-medium leading-5 capitalize"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
                className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg"
                placeholder="Your last name"
              />
            </div>
          </div>
          <div className="grid gap-3 md:flex items-center md:gap-6">
            <div className="grid gap-2 md:w-[354px]">
              <label
                htmlFor="phone"
                className="text-base text-carbon font-medium leading-5 capitalize"
              >
                Phone*
              </label>
              <input
                type="number"
                id="phone"
                {...register("phone", { required: true })}
                className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg"
                placeholder="Your phone number"
              />
            </div>
            <div className="grid gap-2 md:w-[354px]">
              <label
                htmlFor="email"
                className="text-base text-carbon font-medium leading-5 capitalize"
              >
                Email address*
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg"
                placeholder="Your email address"
              />
            </div>
          </div>
          <div className="grid gap-2 w-full">
            <label
              htmlFor="message"
              className="text-base text-carbon font-medium leading-5 capitalize"
            >
              Message*
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg h-[244px]"
              placeholder="Write message"
            />
          </div>
          <div className="flex justify-end mt-4">
            <SharedButton text="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

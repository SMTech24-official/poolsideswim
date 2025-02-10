"use client";

import Image from "next/image";
import React from "react";
import locationIcon from "@/assets/contact/location-icon.svg";
import phoneIcon from "@/assets/contact/phone-icon.svg";
import emailIcon from "@/assets/contact/email-icon.svg";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
              <p className="text-2xl leading-[28px] text-gray">
                Toronto, Ontario, Canada
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image width={24} height={24} src={phoneIcon} alt="Phone Icon" />
              <p className="text-2xl leading-[28px] text-gray">
                +1 416-555-1234
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image width={24} height={24} src={emailIcon} alt="Email Icon" />
              <p className="text-2xl leading-[28px] text-gray">
                {" "}
                info@yourbusiness.ca
              </p>
            </div>
          </div>
        </div>
        {/* right column */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="md:flex items-center gap-6">
            <div className="grid gap-2 md:w-[354px]">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
                className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg"
                placeholder="Your first name"
              />
            </div>
            <div className="grid gap-2 md:w-[354px]">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
                className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg"
                placeholder="Your last name"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-6">
            <div className="grid gap-2 md:w-[354px]">
              <label htmlFor="phone">Phone*</label>
              <input
                type="number"
                id="phone"
                {...register("phone", { required: true })}
                className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg"
                placeholder="Your phone number"
              />
            </div>
            <div className="grid gap-2 md:w-[354px]">
              <label htmlFor="email">Email address*</label>
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
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              className="px-4 py-5 text-gray text-sm leading-[16px] bg-whiteSmoke rounded-lg h-[244px]"
              placeholder="Write message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

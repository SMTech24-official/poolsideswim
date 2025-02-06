"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SharedButton from "../shared/SharedButton";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="mx-auto max-w-[555px]">
      <div className="text-center grid gap-4 mb-6">
        <h1 className="font-bold text-[40px] leading-[48px] text-black">
          Sign up
        </h1>
        <p className="text-base font-medium capitalize leading-5 text-carbon">
          Join Our 100% Free Creatieve Network
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <label
              htmlFor="name"
              className="text-carbon text-base font-medium leading-[25px]"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="email"
              className="text-carbon text-base font-medium leading-[25px]"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="password"
              className="text-carbon text-base font-medium leading-[25px]"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="confirmPassword"
              className="text-carbon text-base font-medium leading-[25px]"
            >
              Confirm Password*
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="confirm your password"
              className="px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <SharedButton type="submit" classes="w-full" text="sign up" />
        <p className="font-medium leading-5 text-base text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold underline">
            log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;

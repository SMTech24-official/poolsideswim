"use client";

import React from "react";
import SharedButton from "../shared/SharedButton";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { toast } from "sonner";

type Inputs = {
  email: string;
};

const ForgotPage = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await forgotPassword(data);
      console.log(res);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="mx-auto max-w-[555px]">
      <div className="text-center grid gap-4 mb-6">
        <h1 className="font-bold text-[40px] leading-[48px] text-black">
          Forgot password
        </h1>
        <p className="text-base font-medium capitalize leading-5 text-carbon">
          Join Our 100% Free Creatieve Network
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
        <div className="grid gap-[18px]">
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
          <div className="flex items-center gap-2">
            <p className="text-gray font-medium leading-5 text-base">
              Remember the Password?
            </p>{" "}
            <Link
              href="/login"
              className="font-medium text-base leading-5 text-primary"
            >
              Log in
            </Link>
          </div>
        </div>
        <SharedButton type="submit" classes="w-full" text="Send Code" />
        <p className="font-medium leading-5 text-base text-center">
          Have an account?{" "}
          <Link href="/login" className="text-primary font-bold underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPage;

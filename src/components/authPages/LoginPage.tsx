"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SharedButton from "../shared/SharedButton";
import Link from "next/link";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/slice/userSlice";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginUser] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await loginUser(data).unwrap();

      if (res?.success === true) {
        dispatch(setUser(res));
        // Optionally store token if needed
        if (res?.data?.accessToken) {
          localStorage.setItem("accessToken", res?.data?.accessToken);
          Cookies.set("accessToken", res?.data?.accessToken, { expires: 7 });
        }
        toast.success(res?.message);
        router.push("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast(error?.data?.message);
    }
  };

  return (
    <div className="mx-auto max-w-[555px]">
      <div className="text-center grid gap-4 mb-6">
        <h1 className="font-bold text-[40px] leading-[48px] text-black">
          Log in
        </h1>
        <p className="text-base font-medium capitalize leading-5 text-carbon">
          Join Our 100% Free Creatieve Network
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
        <div className="grid gap-4">
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
              />
              <button
                className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 transform"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <LuEye className="h-4 w-4" />
                ) : (
                  <LuEyeOff className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <p className="font-medium leading-5 text-gray">Remember Me</p>
              </div>
              <Link
                href="/forgot-password"
                className="text-base hover:underline text-primary font-medium leading-5 capitalize"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <SharedButton type="submit" classes="w-full" text="Log in" />
        <p className="font-medium leading-5 text-base text-center">
          Have an account?{" "}
          <Link href="/sign-up" className="text-primary font-bold underline">
            sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SharedButton from "../shared/SharedButton";
import Link from "next/link";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Inputs = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const router = useRouter();
  const [createUser] = useCreateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({
    confirmPassword,
    ...data
  }) => {
    console.log(confirmPassword);
    try {
      const res = await createUser(data).unwrap();
      // console.log(res?.message);
      if (res?.success === true) {
        toast(res?.message);
        if (res?.message == "OTP sent successfully") {
          router.push("/verify-otp");
        }
      }
    } catch (error: unknown) {
      // console.log(error);
      toast(
        (error as { data?: { message?: string } })?.data?.message ||
          "An error occurred"
      );
    }
  };

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
          <div className="flex gap-6 justify-between w-full">
            <div className="grid gap-3 w-full">
              <label
                htmlFor="firstName"
                className="text-carbon text-base font-medium leading-[25px]"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your full name"
                className="px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="grid gap-3 w-full">
              <label
                htmlFor="lastName"
                className="text-carbon text-base font-medium leading-[25px]"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your full name"
                className="px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="phone"
              className="text-carbon text-base font-medium leading-[25px]"
            >
              Phone*
            </label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your phone"
              className="px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 characters long",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])/,
                    message:
                      "Password must include at least one uppercase letter, one lowercase letter, and one special character (@$!%*?&)",
                  },
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
          </div>

          <div className="grid gap-3">
            <label
              htmlFor="confirmPassword"
              className="text-carbon text-base font-medium leading-[25px]"
            >
              Confirm Password*
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
              />
              <button
                className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 transform"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <LuEye className="h-4 w-4" />
                ) : (
                  <LuEyeOff className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {showConfirmPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
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

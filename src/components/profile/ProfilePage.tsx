"use client";

import React from "react";
import { IoIosLogOut } from "react-icons/io";
import profileImg from "@/assets/gallery-1.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { removeUser } from "@/redux/slice/userSlice";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state?.user);
  //   console.log(user?.user);
  const userInfo = user?.user;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(removeUser());
    router.push("/login");
  };
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          {/* image */}
          <div>
            <Image
              width={1000}
              height={1000}
              src={profileImg}
              alt="Profile image"
              className="w-[84px] h-[84px] rounded-full object-cover"
            />
          </div>
          <div>
            {/* name */}
            <h1 className="text-black text-xl font-semibold leading-7">
              {userInfo?.firstName} {userInfo?.lastName}
            </h1>
            {/* email */}
            <p className="text-gray text-sm font-normal">{userInfo?.email}</p>
          </div>
        </div>
        {/* log out */}
        <div
          onClick={handleLogout}
          className="text-primary  flex gap-2 items-center cursor-pointer"
        >
          <IoIosLogOut className="text-base" />
          <p className="font-medium leading-5">Log out</p>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="flex justify-between gap-12">
          <div className="grid gap-3 w-full">
            <h2 className="text-base font-medium leading-[25px] text-black opacity-80">
              First Name *
            </h2>
            <div className="bg-whiteSmoke rounded-lg px-4 py-[13px]">
              <p className="text-gray text-sm">{userInfo?.firstName}</p>
            </div>
          </div>
          <div className="grid gap-3 w-full">
            <h2 className="text-base font-medium leading-[25px] text-black opacity-80">
              Last Name *
            </h2>
            <div className="bg-whiteSmoke rounded-lg px-4 py-[13px]">
              <p className="text-gray text-sm">{userInfo?.lastName}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="grid gap-3 w-full">
            <h2 className="text-base font-medium leading-[25px] text-black opacity-80">
              Phone number *
            </h2>
            <div className="bg-whiteSmoke rounded-lg px-4 py-[13px]">
              <p className="text-gray text-sm">{userInfo?.phone}</p>
            </div>
          </div>
          <div className="grid gap-3 w-full">
            <h2 className="text-base font-medium leading-[25px] text-black opacity-80">
              Email Address *
            </h2>
            <div className="bg-whiteSmoke rounded-lg px-4 py-[13px]">
              <p className="text-gray text-sm">{userInfo?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

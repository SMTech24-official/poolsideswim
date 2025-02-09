import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/about/banner.svg";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const SharedBanner = ({
  title,
  routeName,
}: {
  title: string;
  routeName: string;
}) => {
  return (
    <div className="relative">
      <Image
        width={1000}
        height={100}
        src={bannerImg}
        alt="Banner"
        className="w-full"
      />
      <div className="container">
        <div className="absolute top-0 bottom-0 grid place-content-center gap-6 text-white">
          <h1 className="text-[64px] font-bold leading-[76px] capitalize">
            {title}
          </h1>
          <p className="text-base font-bold leading-5 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1">
              Home <IoIosArrowForward />
            </Link>
            <span>{routeName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SharedBanner;

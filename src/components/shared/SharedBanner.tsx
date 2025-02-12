import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/about/banner.png";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const SharedBanner = ({
  title,
  routeName,
  subtitle,
}: {
  title: string;
  routeName: string;
  subtitle?: string;
}) => {
  return (
    <div className="relative">
      <Image
        width={1000}
        height={1000}
        src={bannerImg}
        alt="Banner"
        className="w-full h-[450px] object-cover"
      />
      <div className="container">
        <div className="absolute top-0 bottom-0 grid place-content-center gap-6 text-white">
          <div>
            <h1 className="text-5xl xl:text-[64px] font-bold xl:leading-[76px] capitalize">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base leading-[25px]">{subtitle}</p>
            )}
          </div>
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

// import Image from "next/image";
// import React from "react";
// import aboutImage from "@/assets/aboutImage.png";
// import shapeIcon from "@/assets/shape.png";
// import SharedButton from "../shared/SharedButton";
// import Link from "next/link";

// const About = () => {
//   return (
//     <div className="container flex flex-col lg:flex-row items-center gap-6 md:gap-12">
//       <div className="flex-1">
//         <Image
//           src={aboutImage}
//           alt="About Image"
//           width={1000}
//           height={1000}
//           className="w-full max-w-[666px] h-auto md:h-[560px] object-cover rounded-lg"
//         />
//       </div>

//       <div className="flex-1 grid gap-6 md:gap-12">
//         <div className="grid gap-4">
//           <div className="flex gap-2 items-center">
//             <Image
//               width={20}
//               height={10}
//               src={shapeIcon}
//               alt="Icon"
//               className="rounded-lg"
//             />
//             <h2 className="text-primary font-bold text-base leading-5 uppercase">
//               About
//             </h2>
//           </div>
//           <h2 className="text-[40px] font-bold leading-[48px]">
//             About Back to Basics Swim
//           </h2>
//           <p className="text-base leading-[25px] text-gray">
//             Poolside Swimming is a Neighborhood swimming instruction company
//             that specializes in Private and Semi- Private Swimming Lessons. For
//             the past 32 years, Poolside Swimming has taught clients from the
//             ages of 6 months to 85 years of age, and has successfully certified
//             thousands of satisfied customers across the Oakville and Burlington
//             region. Poolside Swimming also provides lifeguarding services for
//             those summer parties by the pool. Professional and highly-skilled
//             Poolside instructors will come to your home to provide Private or
//             Semi- Private swimming instruction. If you do not have access to a
//             pool, you can take classes at our local facility. Poolside Swimming
//             is a fully licensed and insured company. All Poolside Swimming
//             instructors are fully certified and experienced and looking forward
//             to making swimming fun for you
//           </p>
//         </div>
//         <Link href="/faq">
//           <SharedButton text="learn more" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default About;

import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/aboutImage.png";
import shapeIcon from "@/assets/shape.png";
import SharedButton from "../shared/SharedButton";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="container flex flex-col lg:flex-row items-center gap-6 md:gap-12"
      id="about-us"
    >
      <div className="flex-1">
        <Image
          src={aboutImage}
          alt="About Image"
          width={1000}
          height={1000}
          className="w-full max-w-[666px] h-auto md:h-[560px] object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 grid gap-6 md:gap-12">
        <div className="grid gap-4">
          <div className="flex gap-2 items-center">
            <Image
              width={20}
              height={10}
              src={shapeIcon}
              alt="Icon"
              className="rounded-lg"
            />
            <h2 className="text-primary font-bold text-base leading-5 uppercase">
              About US
            </h2>
          </div>
          <h2 className="text-[40px] font-bold leading-[48px]">
            About Back to Basics Swim
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray leading-[25px]">
            <li>
              <span className="font-semibold">
                Neighborhood swimming instruction company
              </span>{" "}
              specializing in Private and Semi-Private Swimming Lessons
            </li>
            <li>
              <span className="font-semibold">32 years of experience</span>{" "}
              teaching clients from 6 months to 85 years old
            </li>
            <li>
              Successfully certified{" "}
              <span className="font-semibold">
                thousands of satisfied customers
              </span>{" "}
              across Oakville and Burlington
            </li>
            <li>
              Provides{" "}
              <span className="font-semibold">lifeguarding services</span> for
              summer pool parties
            </li>
            <li>
              Professional instructors offer{" "}
              <span className="font-semibold">
                in-home Private or Semi-Private lessons
              </span>
            </li>
            <li>
              <span className="font-semibold">Local facility available</span>{" "}
              for those without pool access
            </li>
            <li>
              <span className="font-semibold">Fully licensed and insured</span>{" "}
              company with certified instructors
            </li>
            <li>
              Committed to{" "}
              <span className="font-semibold">making swimming fun</span> for all
              students
            </li>
          </ul>
        </div>
        <Link href="/faq">
          <SharedButton text="learn more" />
        </Link>
      </div>
    </div>
  );
};

export default About;

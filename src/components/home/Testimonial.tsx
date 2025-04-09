// "use client";

// import Image from "next/image";
// import React from "react";
// import shapeIcon from "@/assets/shape.svg";
// import SharedButton from "../shared/SharedButton";
// import Testimonialcard from "../allCards/Testimonialcard";
// import Link from "next/link";
// import { TestimonialData } from "../data/TestimonialData";
// import { usePathname } from "next/navigation";

// const Testimonial = () => {
//   const pathname = usePathname();
//   const testimonial = pathname.split("/").pop();
//   // console.log(testimonial);
//   return (
//     <div className="bg-gray4 pt-[112px] pb-[167px]">
//       <div className="container grid xl:flex items-center gap-6">
//         {/* section header */}
//         <div>
//           <div className="flex gap-2 items-center">
//             <Image
//               width={20}
//               height={10}
//               src={shapeIcon}
//               alt="Icon"
//               className="rounded-lg"
//             />
//             <h2 className="text-primary font-bold text-base leading-5 uppercase">
//               Testimonial
//             </h2>
//           </div>
//           <h2 className="text-black text-[40px] font-bold leading-[48px] py-4">
//             What People Says?
//           </h2>
//           <p className="text-gray text-base leading-[25px]">
//             Real Stories, Real Success – Hear How Our Swimmers Have Gained
//             Confidence, Mastered New Skills, and Enjoyed Their Journey with Back
//             to Basics Swim!
//           </p>
//           {testimonial === "faq" ? (
//             <Link href="/testimonial">
//               <SharedButton classes="mt-6 lg:mt-12" text="View All" />
//             </Link>
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="grid md:flex items-center gap-36 md:gap-6">
//           {TestimonialData?.slice(0, 2)?.map((review) => (
//             <Testimonialcard key={review?.id} review={review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Testimonial;



"use client";

import Image from "next/image";
import React, { useState } from "react";
import shapeIcon from "@/assets/shape.svg";
import SharedButton from "../shared/SharedButton";
import Testimonialcard from "../allCards/Testimonialcard";
import Link from "next/link";
import { TestimonialData } from "../data/TestimonialData";
import { usePathname } from "next/navigation";

const Testimonial = () => {
  const pathname = usePathname();
  const testimonial = pathname.split("/").pop();
  const [showAll, setShowAll] = useState(false);

  // Determine how many testimonials to show
  const displayedTestimonials = showAll ? TestimonialData : TestimonialData.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-gray4 pt-[112px] pb-[167px]">
      <div className="container">
        {/* section header */}
        <div className="mb-12">
          <div className="flex gap-2 items-center">
            <Image
              width={20}
              height={10}
              src={shapeIcon}
              alt="Icon"
              className="rounded-lg"
            />
            <h2 className="text-primary font-bold text-base leading-5 uppercase">
              Testimonial
            </h2>
          </div>
          <h2 className="text-black text-[40px] font-bold leading-[48px] py-4">
            What People Say?
          </h2>
          <p className="text-gray text-base leading-[25px] max-w-2xl">
            Real Stories, Real Success – Hear How Our Swimmers Have Gained
            Confidence, Mastered New Skills, and Enjoyed Their Journey with Back
            to Basics Swim!
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedTestimonials.map((review) => (
            <Testimonialcard key={review.id} review={review} />
          ))}
        </div>

        {/* See All/Less Button */}
        {TestimonialData.length > 3 && (
          <div className="text-center">
            <button
              onClick={toggleShowAll}
              className="bg-primary hover:bg-primary-dark text-white font-medium py-3 mt-10 px-8 rounded-lg transition-colors duration-300"
            >
              {showAll ? "See Less" : "See All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
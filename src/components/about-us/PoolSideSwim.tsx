import React from "react";

const PoolSideSwim = () => {
  return (
    <div className="container">
      <div className="grid xl:flex flex-row-reverse items-center gap-6 md:gap-12">
        <div className="md:w-[666px] md:h-[657px] rounded-lg">
          <iframe
            className="rounded-lg w-full h-[400px] md:w-[666px] md:h-[657px]"
            // width="666"
            // height="657"
            src="https://www.youtube.com/embed/w4xKguZ1D1o?si=dmetLUGIcQ4TG-Fo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid gap-6 md:gap-12">
          <div className="grid gap-4">
            <h2 className="text-[40px] font-bold leading-[48px]">
              Explore the poolside swimming
            </h2>
            <p className="text-base leading-[25px] text-gray">
              At Poolside Swimming, we offer a range of lessons designed to help
              swimmers of all ages and abilities grow and succeed. Whether your
              child is just starting out or looking to refine their technique,
              our expert instructors provide personalized, step-by-step
              guidance. Safety, skill development, and building confidence are
              at the heart of every class. Our state-of-the-art facilities
              provide a comfortable, supportive environment for learning. From
              group lessons to private coaching, we offer flexible options to
              meet your family’s needs. We focus on making each lesson engaging
              and fun, ensuring your child enjoys every moment in the water.
              Explore our programs today and take the first step toward a
              lifetime of swimming confidence and enjoyment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolSideSwim;

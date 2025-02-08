import React from "react";

const SectionHeader = ({
  title,
  subTitle,
  classes,
}: {
  title: string;
  subTitle: string;
  classes?: string;
}) => {
  return (
    <div className={`${classes} grid gap-4`}>
      <h2 className="text-[40px] font-bold leading-[48px] text-black">
        {title}
      </h2>
      <p className="text-base text-gray leading-[25px]">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;

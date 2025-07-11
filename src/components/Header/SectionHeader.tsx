"use client";

import React from "react";

const SectionHeader = ({
  title,
  subTitle,
  titleColor,
  subTitleColor,
}: {
  title: string;
  subTitle: string;
  titleColor: string;
  subTitleColor: string;
}) => {
  return (
    <div className="w-full flex-col justify-start items-start inline-flex gap-3">
      <div className="flex justify-start items-center gap-4">
        <div className="w-[75px] h-[1px] bg-secondary" />
        <div className={`${titleColor} text-md font-normal font-secondary`}>
          {title}
        </div>
      </div>
      <div
        className={`self-stretch ${subTitleColor} text-3xl sm:text-4xl font-medium`}
      >
        {subTitle === "About Holistic Nature Homes" ? (
          <>
            About Holistic Nature <br />
            Homes
          </>
        ) : (
          subTitle
        )}
      </div>
    </div>
  );
};

export default SectionHeader;

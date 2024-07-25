import React from "react";
import Image from "next/image";

const TitleHeader = ({
  image,
  titleText,
  subTitleText,
}: {
  image: string;
  titleText: string;
  subTitleText: string;
}) => {
  return (
    <div className="relative flex h-[80vh] w-full items-center justify-end sm:h-[90vh]">
      <Image
        src={image}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 "
      />
      <div className="absolute bg-black/20 inset-0 flex flex-col items-start justify-center text-start text-white z-10 px-12 sm:px-36">
        <h1 className="mb-4 text-4xl font-semibold sm:text-6xl">{titleText}</h1>
        <p className="mb-8 text-sm sm:text-lg font-secondary">{subTitleText}</p>
      </div>
    </div>
  );
};

export default TitleHeader;

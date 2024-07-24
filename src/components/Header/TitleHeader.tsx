import React from 'react';
import Image from 'next/image';

const TitleHeader = ({ image, titleText, subTitleText }: { image:string, titleText: string, subTitleText: string }) => {
    return (
        <div className="relative flex h-[80vh] w-full items-center justify-center sm:h-[90vh]">
            <Image
                src={image}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 className="mb-4 px-4 text-4xl font-semibold sm:text-6xl">
                    {titleText}
                </h1>
                <p className="mb-8 px-6 text-sm sm:text-lg font-secondary">
                    {subTitleText}
                </p>
            </div>
        </div>
    );
};

export default TitleHeader;

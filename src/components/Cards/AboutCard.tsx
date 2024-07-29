import React from 'react'
import { IconType } from 'react-icons'; 

const AboutCard = ({
    title,
    subTitle,
    Icon
  }: {
    title: string;
    subTitle: string;
    Icon: IconType;
  }) => {
    return (
        <div className="flex px-2 sm:px-8 py-4 w-[360px] sm:w-[380px] h-[80px] flex-row bg-gray-200 gap-5 rounded-lg items-start justify-start">
            <Icon className={`h-8 w-8 `}/>
            <div className="Text flex text-start justify-start flex-col gap-1">
                <h1
                    className="self-stretch text-lime-900 text-sm sm:text-md font-semibold font-secondary"
                >
                   {title}
                </h1>
                <p className=" text-gray-600 text-md sm:text-lg font-medium ">
                {subTitle}
                </p>
            </div>
        </div>
    )
}

export default AboutCard
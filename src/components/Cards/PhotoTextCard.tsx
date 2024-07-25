import Image from 'next/image'
import React from 'react'

const PhotoTextCard = ({ image, title, subTitle }: { image: string, title: string, subTitle: string }) => {
  return (
    <div className="flex h-[400px] w[400px] items-start">
      <Image
        src={image}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="absolute inset-0 flex flex-col justify-center text-center text-white z-10 px-6">
        <h1 className="mb-4 text-3xl font-semibold">
          {title}
        </h1>
        <p className="mb-8 text-lg font-secondary">
          {subTitle}
        </p>
      </div>
    </div>
  )
}

export default PhotoTextCard

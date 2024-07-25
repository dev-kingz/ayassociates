import Image from 'next/image'
import React from 'react'

const PhotoCard = ({ image, name, role }: { image: string, name: string, role: string }) => {
  return (
    <div className="flex h-40 w-70 items-center justify-end rounded-lg gap-4">
    <Image
      src={image}
      alt="Background Image"
      width={300}
      height={400}
      objectFit="cover"
      className="rounded-xl"
    />
    <div className="absolute inset-0 flex flex-col justify-center text-center text-white z-10 px-6">
      <h1 className="mb-4 text-3xl font-semibold">
        {name}
      </h1>
      <p className="mb-8 text-lg font-secondary">
        {role}
      </p>
    </div>
  </div>
  )
}

export default PhotoCard
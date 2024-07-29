import Image from 'next/image'
import React from 'react'

const PhotoCard = ({ image, name, role }: { image: string, name: string, role: string }) => {
  return (
    <div className="flex flex-col self-stretch items-center gap-4">
    <Image
      src={image}
      alt="Background Image"
      width={350}
      height={450}
      className="rounded-xl"
    />
    <div className="flex flex-col justify-center text-center px-6">
      <h1 className="text-2xl text-secondary font-medium">
        {name}
      </h1>
      <p className="text-md text-gray-600 font-secondary">
        {role}
      </p>
    </div>
  </div>
  )
}

export default PhotoCard
import Image from 'next/image'
import React from 'react'

const PhotoTextCard = ({ image, title, subTitle }: { image: string, title: string, subTitle: string }) => {
  return (
    <div className="relative flex items-start ">
      <Image
        src={image}
        alt="Background Image"
        width={350}
        height={350}
        className="rounded-xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6 bg-black bg-opacity-5 rounded-xl">
        <h1 className="mb-4 text-2xl font-semibold">
          {title}
        </h1>
        <p className="mb-8 text-md font-secondary">
          {subTitle}
        </p>
      </div>
    </div>
  )
}

export default PhotoTextCard

// import Image from 'next/image'
// import React from 'react'

// const PhotoTextCard = ({ image, title, subTitle }: { image: string, title: string, subTitle: string }) => {
//   return (
//     <div className="relative flex items-center justify-center rounded-lg">
//       <Image
//         src={image}
//         alt="Background Image"
//         width={350}
//         height={450}
//         className="rounded-xl object-cover"
//       />
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6 bg-black bg-opacity-50">
//         <h1 className="mb-4 text-3xl font-semibold">
//           {title}
//         </h1>
//         <p className="mb-8 text-lg font-secondary">
//           {subTitle}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default PhotoTextCard
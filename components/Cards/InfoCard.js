import React from 'react'
import Image from 'next/image'
const InfoCard = ({ title, description, image }) => {
  return (
    <div className='bg-white p-2 text-noir  rounded hover:scale-105 transition transform ease-in-out '>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-1 justify-center items-center'>
        <div className='flex justify-center lg:col-span-1'>
          <Image
            src={image}
            alt='image'
            width='80'
            height='80'
            objectFit='cover'
            className='rounded-full shadow-md'
          />
        </div>
        <div className='leading-loose lg:col-span-2'>
          <h1 className='font-black'>{title}</h1>
          <p> {description}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard

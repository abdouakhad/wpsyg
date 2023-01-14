import React from 'react'
import Image from 'next/image'
const partner = [
  '/partner/p1.svg',
  '/partner/p2.svg',
  '/partner/p3.svg',
  '/partner/p4.svg',
  '/partner/p5.svg',
  '/partner/p6.svg',
]
const Partners = () => {
  return (
    <>
      <div className='  my-16  rounded-xl '>
        <h1 className='uppercase text-white text-5xl font-black py-5 text-center'>
          Partners
        </h1>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-3 pb-8 '>
        {partner.map((item, index) => {
          return (
            <div key={index} className='flex items-center justify-center '>
              <div className='border rounded-full p-4 bg-white'>
                <Image
                  src={item}
                  alt='partner'
                  width={200}
                  height={200}
                  objectFit='contain'
                  className='rounded-full'
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Partners

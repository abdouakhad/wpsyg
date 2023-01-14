import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const CardTeam = ({ name, work, img, linkedIn, twitter }) => {
  return (
    <>
      <div className='first-grid rounded-lg bg-my-green py-3 md:px-1 px-2 bg-pink h-full'>
        <div className='img text-center'>
          <Image
            src={img}
            className='object-scale-down'
            height={250}
            width={250}
            layout='intrinsic'
            objectFit='contain'
            alt={name}
          />
        </div>
        <div className='icon grid grid-cols-5 mt-3 items-end justify-between'>
          <div className='description col-span-3 bg-my-gray text-white rounded-lg py-3 px-1'>
            <h1 className='truncate'>{name}</h1>
            <p className='truncate'>{work}</p>
          </div>
          <div className='icon font-black col-span-2 justify-self-end'>
            <div className='md:px-0  flex justify-center items icons space-x-2 border-b-2 py-1'>
              <Link href={linkedIn}>
                <a>
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size='2x'
                    className='rounded inline'
                  />
                </a>
              </Link>
              <Link href={twitter}>
                <a>
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size='2x'
                    className='rounded inline'
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardTeam

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
const src = '/img/credit-card.svg'
const icon1 = '/social/facebook.svg'
const icon2 = '/social/instagram.svg'
const icon3 = '/social/linkedin.svg'
const Donate = () => {
  return (
    <div className=' md:px-8 sm:px-4 px-1 w-11/12 rounded m-auto bg-noir shadow my-10 py-10 relative'>
      <div className='tracking-wide leading-loose'>
        <h1 className='lh lg:text-5xl md:text-4xl sm:text-2xl text-3xl md:text-left text-center font-bold   '>
          Thank you for supporting us by making a gift to our company.
        </h1>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 justify-center items-center '>
        <div className='my-10 md:justify-self-end justify-self-center w-full sm:tracking-normal tracking-wider'>
          <p className='flex items-center font-bold sm:justify-start justify-center '>
            <FontAwesomeIcon icon='search-location' size='3x' color='#10B981' />
            <span className='ml-5 text-xl'>Somone, Thies, Senegal</span>
          </p>
          <p className='flex items-center font-bold sm:justify-start justify-center mt-5'>
            <FontAwesomeIcon icon='phone-volume' size='3x' color='#10B981' />
            <span className='ml-5 text-xl'>Somone, Thies, Senegal</span>
          </p>
          <p className='flex items-center font-bold sm:justify-start justify-center mt-5'>
            <FontAwesomeIcon icon='envelope' size='3x' color='#10B981' />
            <span className='ml-5 text-xl'>Somone, Thies, Senegal</span>
          </p>
        </div>

        <div className='md:justify-self-end relative justify-self-center'>
          <Image
            className='text-vertClair'
            src={src}
            alt='contact us'
            layout='intrinsic'
            objectFit='container'
            width={300}
            height={300}
            priority
          />
        </div>
        <div className='my-10 md:absolute hidden top-48 text left-[45%] md:flex col-auto justify-center'>
          <FontAwesomeIcon icon='arrows-alt-h' size='4x' color='#10B981' />
        </div>
        <div className='h-10 bg-vertClair sm:hidden block mb:mb-0 mb-10'></div>
      </div>
      <div className='socials flex justify-center items-center gap-10 mt-0   '>
        <Link href='/' passHref>
          <Image
            src={icon1}
            alt='facebook'
            height={50}
            width={50}
            layout='fixed'
            className='transition ease-in-out duration-500 outline outline-offset-5 outline-vertClair hover:outline-2 hover:rounded-full hover:cursor-pointer hover:scale-90'
          />
        </Link>
        <Link href='/' passHref>
          <Image
            src={icon2}
            alt='instagram'
            height={50}
            width={50}
            layout='fixed'
            className='transition ease-in-out duration-500 outline outline-offset-5 outline-vertClair hover:outline-2 hover:rounded-full hover:cursor-pointer hover:scale-90 '
          />
        </Link>
        <Link href='/' passHref>
          <Image
            src={icon3}
            alt='linkedin'
            height={50}
            width={50}
            layout='fixed'
            className='transition ease-in-out duration-500 outline outline-offset-5 outline-vertClair hover:outline-2 hover:rounded-full hover:cursor-pointer hover:scale-90'
          />
        </Link>
      </div>
    </div>
  )
}

export default Donate

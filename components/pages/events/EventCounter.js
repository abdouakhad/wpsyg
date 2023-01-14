import React, { useState, useEffect } from 'react'

const calculateTimeLeft = () => {
  let year = new Date().getFullYear()
  let difference = +new Date(`03/14/${year}`) - +new Date()

  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return timeLeft
}

const EventCounter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const timerComponents = { ...timeLeft }

  return (
    <div>
      <div className=' bg-gradient-to-br from-pink to-fuchsia-600 '>
        <div className='grid md:grid-cols-2 justify-center md:gap-4 gap-8 px-4 items-center py-5 container mx-auto lg:px-4'>
          <div className='leading-loose sm:w-2/3'>
            <p>Conference Date</p>
            <h1 className='font-black capitalize text-3xl'>
              Count Every Second Until The Event
            </h1>
          </div>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center border p-2 border-gray-400 rounded '>
              <h1 className='lg:text-6xl md:text-4xl xs:text-4xl text-2xl font-black'>
                {timerComponents.days}
              </h1>
              <p className='font-semibold'>Days</p>
            </div>
            <div className='flex flex-col justify-center items-center border p-2 border-gray-400 rounded '>
              <h1 className='lg:text-6xl md:text-4xl xs:text-4xl text-2xl font-black'>
                {timerComponents.hours}
              </h1>
              <p className='font-semibold'>Hrs</p>
            </div>
            <div className='flex flex-col justify-center items-center border p-2 border-gray-400 rounded '>
              <h1 className='lg:text-6xl md:text-4xl xs:text-4xl text-xl font-black'>
                {timerComponents.minutes}
              </h1>
              <p className='font-semibold'>Mns</p>
            </div>
            <div className='flex flex-col justify-center items-center border p-2 border-gray-400 rounded '>
              <h1 className='lg:text-6xl md:text-4xl xs:text-4xl text-2xl font-black'>
                {timerComponents.seconds}
              </h1>
              <p className='font-semibold'>Secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCounter

import React from 'react'
import TeamMember from './TeamMember'
import Image from 'next/image'
const pr1 = '/team/realTeam/img1.png'
const pr2 = '/team/realTeam/img2.png'
const pr3 = '/team/realTeam/img3.png'
const pr4 = '/team/realTeam/img4.png'
const pr5 = '/team/realTeam/img5.png'

const Team = () => {
  return (
    <div className='  bg-white py-10 '>
      <div className='container mx-auto px-4'>
        <div className='the-text py-5 '>
          <h1 className='text-3xl font-bold mb-5 bg-pink lg:w-4/12 md:w-5/12 sm:w-7/12 w-9/12  px-2 rounded-xl opacity-80 py-2'>
            Team
          </h1>
          <p className='text-noir'>
          Professional Service Requires an Experienced Team.Individuals brought together to create a team considered the perfect combination for a particular purpose.
          </p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 xs:grid-cols-2 gap-4 justify-center items-center '>
          <TeamMember
            linkedIn='https://www.linkedin.com/in/sokhar-samb/'
            twitter='https://twitter.com/SambSokhar'
            img={pr1}
            name='Sokhar Samb'
            work='Data Scientist'
          />
          <TeamMember
            linkedIn='https://www.linkedin.com/in/yolande-ngueabou-1826a6132/'
            twitter='https://twitter.com/Yolande_NY '
            img={pr2}
            name='Yolande Ngueabu'
            work='Mathmaticien'
          />
          <TeamMember
            linkedIn='https://www.linkedin.com/in/foutse-yuehgoh-9105b184/'
            twitter='https://twitter.com/yuehgoh'
            img={pr3}
            name='Foutse Yuehgoh'
            work='Physicien '
          />
          <TeamMember
            linkedIn='https://www.linkedin.com/in/kanubalad'
            twitter='https://twitter.com/KanubalaD'
            img={pr4}
            name='Kanubala Deborah'
            work='Physicien '
          />
          <TeamMember
            linkedIn='https://www.linkedin.com/in/irene-kameni-49201112b/'
            twitter='https://twitter.com/irenekameni08'
            img={pr5}
            name='Irène Kameni'
            work='Physicien '
          />
        </div>
      </div>
    </div>
  )
}

export default Team

import React from 'react'
import Image from 'next/image'
import SecondPage from '../../components/pages/aboutpage/page2'
import HeadTag from '../../components/layout/HeadTag'

const AboutPage = () => {
  return (
    <>
      <HeadTag name='About' />
      {/* Landing Site of the about page */}
      <div>
        <SecondPage />
      </div>
    </>
  )
}

export default AboutPage

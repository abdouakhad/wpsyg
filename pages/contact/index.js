import React from 'react'
import { Fragment } from 'react'
import HeadTag from '../../components/layout/HeadTag'
import FourthPage from '../../components/pages/contactPage/page4'

const ContactPage = () => {
  return (
    <Fragment>
      <HeadTag name='Contact' />
      <main className=''>
        <FourthPage />
      </main>
    </Fragment>
  )
}

export default ContactPage

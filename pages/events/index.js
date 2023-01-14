import React from 'react'
import EventContainer from '../../components/pages/events'
import HeadTag from '../../components/layout/HeadTag'
const Events = () => {
  return (
    <>
      <HeadTag name='Events' />
      <div className=''>
        <EventContainer />
      </div>
    </>
  )
}

export default Events

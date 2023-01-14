import React from 'react'
import { Fragment } from 'react'

const ButtonBeize = (props) => {
  return (
    <Fragment>
      <button className='rounded-md bg-black hover:opacity-90 text-white py-2 lg:px-12 md:px-2 border border-beize font-semibold'>
        {props.name}
      </button>
    </Fragment>
  )
}

export default ButtonBeize

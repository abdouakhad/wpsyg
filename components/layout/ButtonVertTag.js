import React from 'react'
import { Fragment } from 'react'

const ButtonVertTag = (props) => {
  return (
    <Fragment>
      <button className='border rounded-md bg-white  text-black lg:px-12 md:px-2  py-2 hover:bg-gray-200 font-semibold'>
        {props.name}
      </button>
    </Fragment>
  )
}

export default ButtonVertTag

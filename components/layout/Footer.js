import React from 'react'

// function that returns the year
function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  const year = getYear()
  return (
    <div className='bg-white text-xl font-semibold flex items-center justify-center text-noir py-10'>
      <p>copyright © company {year} </p>
    </div>
  )
}

export default Footer

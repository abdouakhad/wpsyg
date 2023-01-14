import { Fragment } from 'react'
import { Navbar } from './Navbar'
import Footer from '../layout/Footer'
const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className='bg-pink '>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout

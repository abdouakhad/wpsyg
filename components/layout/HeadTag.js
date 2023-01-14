import React from 'react'
import { Fragment } from 'react'
import Head from 'next/head'

const HeadTag = (props) => {
  return (
    <Fragment>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{props.name} | Company</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
    </Fragment>
  )
}

export default HeadTag

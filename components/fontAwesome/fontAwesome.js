import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const fontAwesome = (props) => {
  const { icon } = props
  return (
    <Fragment>
      <FontAwesomeIcon icon={icon} color='#111827' size='5x' />
    </Fragment>
  )
}

export default fontAwesome

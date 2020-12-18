import * as React from 'react'
import PropTypes from 'prop-types'
import { accessUrl } from './spotify'

export default function Login () {
  return (
    <div className='login'>
      <img
        src=''
        alt=''
      />
      <a href={accessUrl}>
        LOGIN TO MUSIFY
      </a>
    </div>
  )
}

Login.propTypes = {

}
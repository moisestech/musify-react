import * as React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import Body from './Body'

export default function Player ({ spotify }) {
  return (
    <div className='player'>
      <div className='player-body'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  )
}

Player.propTypes = {
  spotify: PropTypes.string.isRequired
}
import * as React from 'react'
import PropTypes from 'prop-types'

export default function SongRow ({ track, playSong }) {
  return (
    <div className='song-row'>
      <div
        className='song-row-album'
        src={}
        alt=''
      >
        <h1>Track Name</h1>
        <p>
          Track Artist
          Track Album Name
        </p>
      </div>
    </div>
  )
}

SongRow.propTypes = {

}
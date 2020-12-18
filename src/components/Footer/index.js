import * as React from 'react'
import PropTypes from 'prop-types'

import PlayerCircleOutlineIcon from '@material-ui/icons/PlayerCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { Grid, Slider } from '@material-ui/core'

export default function Footer ({ spotify }) {
  return (
    <div className='footer'>
      <div className='footer-left'>
      </div>
      <div className='footer-center'>
      </div>
      <div className='footer-green'>
      </div>
    </div>
  )
}

Footer.propTypes = {

}
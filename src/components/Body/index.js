import * as React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import SongRow from './SongRow'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz'

export default function Body ({ spotify }) {
  return (
    <div classNames='body'>

    </div>
  )
}

Body.propTypes = {
  spotify: PropTypes.string.isRequired
}
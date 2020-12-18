import * as React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'



export default function Header ({ spotify }) {
  return (
    <div className='header'>
      <div className='header-left'>
        <SearchIcon />
        <input
          placeholder='Search for Artists, Songs, or Podcasts'
          type='text'
        />
      </div>
      <div className='header-right'>
        <Avatar
          alt={user?.display_name}
          src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

Header.propTypes = {
  spotify: PropTypes.string.isRequired
}
import * as React from 'react'
import PropTypes from 'prop-types'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

export default function Sidebar () {
  return (
    <div className='sidebar'>
      <img
        className='sidebar-logo'
        src=''
        alt=''
      />
      <SidebarOption
        Icon={HomeIcon}
        option='Home'
      />
      <SidebarOption
        Icon={SearchIcon}
        option='Search'
      />
      <SidebarOption
        Icon={LibraryMusicIcon}
        option='Your Library'
      />
      <br />
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          option={playlist.name}
        />
      ))}
    </div>
  )
}

Sidebar.propTypes = {

}
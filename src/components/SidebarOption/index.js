import * as React from 'react'
import PropTypes from 'prop-types'

export default function SidebarOption ({ option = 'test', Icon }) {
  return (
    <div className='SidebarOption'>
      {Icon && <Icon className='sidebar-option-icon' />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

SidebarOption.propTypes = {

}
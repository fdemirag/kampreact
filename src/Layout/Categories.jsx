import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div> <Menu pointing vertical>
    <Menu.Item
      name='home'
    //  active={activeItem === 'home'}
     // onClick={this.handleItemClick}
    />
    <Menu.Item
      name='messages'
      // active={activeItem === 'messages'}
    //   onClick={this.handleItemClick}
    />
    <Menu.Item
      name='friends'
    //   active={activeItem === 'friends'}
     //  onClick={this.handleItemClick}
    />
  </Menu></div>
  )
}

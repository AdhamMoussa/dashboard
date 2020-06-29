import React from 'react'
import { useHistory } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core'

import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'

const list = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    route: '/dashboard',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    route: '/dashboard/settings',
  },
]

interface IProps {
  closeDrawer: () => void
}

const DashboardMenu: React.FC<IProps> = ({ closeDrawer }) => {
  const history = useHistory()

  return (
    <List>
      {list.map((item) => (
        <ListItem
          key={item.route}
          style={{ padding: '8px 40px' }}
          onClick={() => {
            closeDrawer()
            history.push(item.route)
          }}
          button
        >
          <ListItemIcon style={{ minWidth: 'unset', marginRight: '12px' }}>
            {item.icon}{' '}
          </ListItemIcon>

          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  )
}

export default DashboardMenu

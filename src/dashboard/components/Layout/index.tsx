import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import DashboardMenu from '../DashboardMenu'

import { firebaseApp } from 'firebaseApp'

import { AppState } from 'core/store'
import { clearUser } from 'core/store/user'

const DashboardLayout: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const dispatch = useDispatch()

  const userData = useSelector((state: AppState) => state.user.data)

  const logout = async () => {
    await firebaseApp.auth().signOut()
    dispatch(clearUser())
  }

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          {userData && (
            <Box marginLeft="auto" display="flex" alignItems="center">
              <Typography style={{ marginRight: '15px' }}>
                {userData.email}
              </Typography>

              <Button color="secondary" onClick={logout}>
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="temporary"
        anchor="left"
      >
        <DashboardMenu closeDrawer={() => setDrawerOpen(false)} />
      </Drawer>

      <main>{children}</main>
    </>
  )
}

export default DashboardLayout

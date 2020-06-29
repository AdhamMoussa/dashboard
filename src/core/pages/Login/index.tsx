import React from 'react'

import { Card, CardContent, TextField, Button } from '@material-ui/core'

import { useStyles } from './useStyles'

const Login = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent>
          <form>
            <div className={classes.formRow}>
              <TextField
                variant="outlined"
                placeholder="Email"
                type="text"
                label="Email"
              />
            </div>

            <div className={classes.formRow}>
              <TextField
                variant="outlined"
                placeholder="Password"
                type="password"
                label="Password"
              />
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login

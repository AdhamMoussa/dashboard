import React from 'react'

import {
  Backdrop,
  CircularProgress,
  Card,
  GridList,
  GridListTile,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import { useJokes } from 'dashboard/hooks/useJokes'

const Dashboard = () => {
  const { jokes, loading, error } = useJokes()

  if (error) {
    return (
      <Box marginBottom="45px">
        <Alert severity="error">{error}</Alert>
      </Box>
    )
  }

  if (loading) {
    return (
      <Backdrop open>
        <CircularProgress color="primary" size={70} />
      </Backdrop>
    )
  }

  return (
    <GridList cellHeight={160} cols={3}>
      {jokes.map((joke) => (
        <GridListTile key={joke.id} cols={1}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography gutterBottom>
                <strong>{joke.setup}</strong>
              </Typography>

              <Typography>{joke.punchline}</Typography>
            </CardContent>
          </Card>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default Dashboard

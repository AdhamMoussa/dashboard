import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  card: {
    width: '450px',
    maxWidth: '90vw',
    textAlign: 'center',
    padding: '45px',
  },
  formRow: {
    marginBottom: '28px',
  },
})

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
    width: '550px',
    maxWidth: '90vw',
    textAlign: 'center',
    padding: '45px',
  },
  title: {
    marginBottom: '45px',
    textAlign: 'center',
  },
  form: {
    textAlign: 'left',
  },
  formRow: {
    marginBottom: '28px',
  },
  errorMsg: {
    height: '16px',
  },
  btn: {
    textAlign: 'center',
  },
})

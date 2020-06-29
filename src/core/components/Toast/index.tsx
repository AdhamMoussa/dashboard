import React from 'react'
import Alert, { AlertProps } from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'

interface IProps {
  isOpen: boolean
  type: AlertProps['severity']
  message: string
  duration?: number
  onClose: () => void
}

const Toast: React.FC<IProps> = (props) => {
  const { isOpen, type, message, duration, onClose } = props

  return (
    <Snackbar
      open={isOpen}
      onClose={onClose}
      autoHideDuration={duration || 5000}
    >
      <Alert severity={type} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast

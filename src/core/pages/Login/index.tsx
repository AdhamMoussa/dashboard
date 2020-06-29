import React, { useState } from 'react'
import { useFormik } from 'formik'

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import { validationSchema } from './validationSchema'

import { firebaseApp } from 'firebaseApp'

import { useStyles } from './useStyles'

const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  const [serverError, setServerError] = useState('')

  const classes = useStyles()

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,

    validationSchema,

    onSubmit: async (submitValues) => {
      const { email, password } = submitValues

      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        setServerError(error.message || 'Something went wrong')
      }
    },
  })

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h3" component="h1" className={classes.title}>
            Login
          </Typography>

          <form onSubmit={handleSubmit} noValidate className={classes.form}>
            {serverError && (
              <Box marginBottom="45px">
                <Alert severity="error">{serverError}</Alert>
              </Box>
            )}

            <div className={classes.formRow}>
              <TextField
                variant="outlined"
                placeholder="Email"
                type="text"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.email && errors.email)}
                disabled={isSubmitting}
                fullWidth
              />

              <div className={classes.errorMsg}>
                {touched.email && errors.email && (
                  <Typography variant="caption" color="error">
                    {errors.email}
                  </Typography>
                )}
              </div>
            </div>

            <div className={classes.formRow}>
              <TextField
                variant="outlined"
                placeholder="Password"
                type="password"
                label="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.password && errors.password)}
                disabled={isSubmitting}
                fullWidth
              />

              <div className={classes.errorMsg}>
                {touched.password && errors.password && (
                  <Typography variant="caption" color="error">
                    {errors.password}
                  </Typography>
                )}
              </div>
            </div>

            <div className={classes.btn}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                disabled={isSubmitting}
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

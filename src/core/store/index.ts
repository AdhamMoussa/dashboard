import { combineReducers, Action } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import userReducer from './user'
import jokesReducer from 'dashboard/store/jokes'

export const rootReducer = combineReducers({
  user: userReducer,
  jokes: jokesReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export type ThunkActionType<T = Promise<void>> = ThunkAction<
  T,
  AppState,
  null,
  Action<string>
>

export type ThunkDispatchType = ThunkDispatch<AppState, any, Action<string>>

export const store = configureStore({
  reducer: rootReducer,
})

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Joke = {
  id: number
  setup: string
  punchline: string
}

type JokesState = {
  loading: boolean
  list: Joke[]
  error: string | null
}

const initialState: JokesState = {
  loading: false,
  list: [],
  error: null,
}

const jokesSlice = createSlice({
  name: 'jokes',

  initialState,

  reducers: {
    start_getJokes: (state) => {
      state.loading = true
      state.error = null
    },

    success_getJokes: (state, action: PayloadAction<Joke[]>) => {
      state.loading = false
      state.list = action.payload
    },

    fail_getJokes: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  start_getJokes,
  success_getJokes,
  fail_getJokes,
} = jokesSlice.actions

export default jokesSlice.reducer

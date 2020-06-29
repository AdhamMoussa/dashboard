import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  name: string
  email: string
}

type UserState = {
  data: User | null
}

const initialState: UserState = {
  data: null,
}

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload
    },
    clearUser: (state) => {
      state.data = null
    },
  },
})

export const { getUser, clearUser } = userSlice.actions

export default userSlice.reducer

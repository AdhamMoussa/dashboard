import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from 'firebase'

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
  },
})

export const { getUser } = userSlice.actions

export default userSlice.reducer
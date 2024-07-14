import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || null,
    userInfo: null
  },
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  }
})

export const { setToken } = userSlice.actions

export default userSlice.reducer

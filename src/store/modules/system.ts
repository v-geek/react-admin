import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { SystemState } from '../types'

export const systemSlice = createSlice({
  name: 'system',
  initialState: (): SystemState => ({
    layout: 'vertical',
    sideBar: {
      // 是否折叠菜单
      isCollapse: false
    }
  }),
  reducers: {
    setCollapse: (state: SystemState, action: PayloadAction<boolean>) => {
      state.sideBar.isCollapse = action.payload
    }
  }
})

export const { setCollapse } = systemSlice.actions

export default systemSlice.reducer

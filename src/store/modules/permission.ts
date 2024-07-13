import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const permissionSlice = createSlice({
  name: 'permission',
  initialState: {
    // 菜单权限
    menuList: [],
    // 用户所有的按钮权限
    buttonData: null,
    // 当前页面的 route name, 用来做按钮权限筛选
    curRouteName: '测试名称'
  } as any,
  reducers: {
    setRouteName: (state, action: PayloadAction<string>) => {
      state.curRouteName = action.payload
    }
  }
})

export const { setRouteName } = permissionSlice.actions

export default permissionSlice.reducer

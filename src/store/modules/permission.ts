import { getShowMenuList } from '@/router/utils'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const permissionSlice = createSlice({
  name: 'permission',
  initialState: {
    // 菜单权限
    menuList: [],
    showMenuList: [],
    // 用户所有的按钮权限
    buttonData: null,
    // 当前页面的 route name, 用来做按钮权限筛选
    curRouteName: '测试名称'
  },
  reducers: {
    setRouteName: (state, action: PayloadAction<string>) => {
      state.curRouteName = action.payload
    },
    setButtonData: (state, action: PayloadAction<Recordable<string[]>>) => {
      state.buttonData = action.payload
    },
    setMenuList: (state, { payload }: PayloadAction<Recordable[]>) => {
      state.menuList = payload
      state.showMenuList = getShowMenuList(payload)
    }
  }
})

export const { setRouteName, setButtonData, setMenuList } = permissionSlice.actions

export default permissionSlice.reducer

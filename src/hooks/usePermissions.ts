import { getButtonDataApi, getMenuListApi } from '@/api/modules/user'
import { setButtonData, setMenuList } from '@/store/modules/permission'
import { useDispatch } from 'react-redux'
import { notification } from './useMessage'
import { setToken } from '@/store/modules/user'

const usePermissions = () => {
  const dispatch = useDispatch()

  const initPermissions = async () => {
    try {
      const { data } = await getButtonDataApi()
      dispatch(setButtonData(data))

      const { data: menuList } = await getMenuListApi()
      dispatch(setMenuList(menuList))

      if (!menuList.length) {
        notification.warning({
          message: '无权限访问',
          description: '当前账号无任何菜单权限, 请联系系统管理员！'
        })

        dispatch(setToken(null))

        return Promise.reject()
      }
    } catch (error) {
      dispatch(setToken(null))
      return Promise.reject(error)
    }
  }

  return { initPermissions }
}

export default usePermissions

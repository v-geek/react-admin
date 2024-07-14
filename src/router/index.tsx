import { useEffect, useState } from 'react'
import {
  RouterProvider,
  RouteObject,
  createHashRouter,
  createBrowserRouter
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import useMessage from '@/hooks/useMessage'
import { RootState } from '@/store'
import { IRoute } from './type'
import { staticRouterList } from './modules/staticRouter'
import usePermissions from '@/hooks/usePermissions'
import { handleDynamicRouter } from './modules/dynamicRouter'
import NotFound from '@/views/error/404'

const mode = import.meta.env.VITE_ROUTER_MODE

const RouterProviderCompo: React.FC = () => {
  useMessage()

  const token = useSelector((state: RootState) => state.user.token)
  const menuList = useSelector((state: RootState) => state.permission.menuList)

  const [routerList, setRouterList] = useState<IRoute[]>(staticRouterList)

  const { initPermissions } = usePermissions()

  // 登录以后会执行 || 刷新页面会执行(非登录页)  menuList改变组件就会重渲染
  useEffect(() => {
    // 刷新页面
    if (token && !menuList.length) {
      initPermissions()
      return
    }

    // 将用户的 菜单列表 转换成 React支持的格式
    const dynamicRouter = handleDynamicRouter(menuList)

    console.log('dynamicRouter', dynamicRouter)

    const allRouter = [...staticRouterList, ...dynamicRouter]

    // To prevent 404 from refreshing the page, add the * route at the end
    allRouter.forEach(item => item.path === '*' && (item.element = <NotFound />))

    console.log('allRouter', allRouter)

    setRouterList(allRouter)
  }, [menuList])

  const routerMode = {
    hash: () => createHashRouter(routerList as RouteObject[]),
    history: () => createBrowserRouter(routerList as RouteObject[])
  }

  return <RouterProvider router={routerMode[mode]()} />
}

export default RouterProviderCompo

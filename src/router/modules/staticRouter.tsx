import { Navigate } from 'react-router-dom'
import { IRoute } from '../type'
import Login from '@/views/user/login'
import NoAuth from '@/views/error/403'
import NotFound from '@/views/error/404'
import { Loading } from '@/components/loading'
import RouterGuard from '../utils/routerGuard'

export const staticRouter: IRoute[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/403',
    element: <NoAuth />,
    meta: {
      title: '403页面'
    }
  },
  {
    path: '/404',
    element: <NotFound />,
    meta: {
      title: '404页面'
    }
  },
  // Set <Loading /> here first to prevent page refresh 404
  {
    path: '*',
    element: <Loading />
  }
]

export const staticRouterList = staticRouter.map(route => {
  return {
    ...route,
    element: <RouterGuard>{route.element}</RouterGuard>,
    loader: () => {
      return { ...route.meta }
    }
  }
})

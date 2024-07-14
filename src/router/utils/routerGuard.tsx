import { RootState } from '@/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { MetaProps } from '../type'
import { HOME_URL, LOGIN_URL, NoAuth_URL, ROUTER_WHITE_LIST } from '@/config'
import { handleDynamicRouter } from '../modules/dynamicRouter'

interface RouterGuardProps {
  children: any
}

const RouterGuard: React.FC<RouterGuardProps> = props => {
  const loader = useLoaderData()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  window.$navigate = navigate

  const token = useSelector((state: RootState) => state.user.token)
  const menuList = useSelector((state: RootState) => state.permission.menuList)
  const dynamicRouter = handleDynamicRouter(menuList)

  useEffect(() => {
    const meta = loader as MetaProps

    if (meta) {
      const title = import.meta.env.VITE_TITLE
      document.title = meta?.title ? `${meta.title} - ${title}` : title
    }

    const isLoginPage = pathname === LOGIN_URL

    if (isLoginPage && token) {
      return navigate(HOME_URL)
    }

    if (!isLoginPage && !token) {
      return navigate(LOGIN_URL, { replace: true })
    }

    if (ROUTER_WHITE_LIST.includes(pathname)) return

    const hasAuth = dynamicRouter[0].children.some(item => item.path === pathname)

    if (!isLoginPage && !hasAuth) {
      return navigate(NoAuth_URL)
    }
  }, [loader])

  return props.children
}

export default RouterGuard

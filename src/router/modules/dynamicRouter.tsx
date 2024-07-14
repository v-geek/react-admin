import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { IRoute } from '../type'
import { getFlatMenuList } from '../utils'
import RouterGuard from '../utils/routerGuard'
import LazyComponent from '@/components/lazy'
import Layout from '@/layout'

const modules = import.meta.glob('@/views/**/*.tsx') as Recordable<Parameters<typeof lazy>[number]>

export const handleDynamicRouter = (menuList: IRoute[]) => {
  const flatMenuList = getFlatMenuList(menuList)

  const tempMenuList = flatMenuList.map(item => {
    if (item.element && typeof item.element == 'string') {
      const component = lazy(modules['/src/views' + item.element + '.tsx'])
      const SuspenseComponent = LazyComponent(component)
      item.element = <RouterGuard>{SuspenseComponent}</RouterGuard>
    }

    if (item.redirect) {
      item.element = <Navigate to={item.redirect} />
    }

    // ?
    item.loader = () => {
      // 对于没有明确值的变量, 对其两次取非后结果为false
      return { ...item.meta, redirect: !!item.redirect }
    }

    if (item.children) delete item.children

    return item
  })

  const result: IRoute[] = [{ element: <Layout />, children: [] }]

  tempMenuList.forEach((item: IRoute) => {
    if (item.meta?.isFull) result.push(item)
    else result[0].children?.push(item)
  })

  return result
}

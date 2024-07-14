import { IRoute } from '../type'

// 扁平化路由, 用户在 react-router 中挂载
export function getFlatMenuList(menuList: IRoute[]): IRoute[] {
  const newMenuList = JSON.parse(JSON.stringify(menuList))

  return newMenuList.flatMap((item: IRoute) => [
    item,
    ...(item.children ? getFlatMenuList(item.children) : [])
  ])
}

// 过滤出在左侧菜单显示的路由
export function getShowMenuList(menuList: IRoute[]) {
  let newMenuList: IRoute[] = JSON.parse(JSON.stringify(menuList))

  return newMenuList.filter(item => {
    item.children?.length && (item.children = getShowMenuList(item.children))
    return !item.meta?.showInMenu
  })
}

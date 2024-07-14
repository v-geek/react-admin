import { RouteObject } from 'react-router-dom'

export interface MetaProps {
  key?: string
  icon?: string
  title?: string
  activeMenu?: string
  isLink?: string
  isHide?: boolean
  isFull?: boolean
  isAffix?: boolean
  showInMenu?: boolean
  // isKeepAlive?: boolean;
}

export type IRoute = Omit<RouteObject, 'children'> & {
  redirect?: string
  meta?: MetaProps
  children?: IRoute[]
}

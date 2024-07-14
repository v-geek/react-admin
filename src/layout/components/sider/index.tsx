import { useMemo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Menu, MenuProps } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import { RootState } from '@/store'
import { IRoute } from '@/router/type'

type MenuItem = Required<MenuProps>['items'][number]

const Sider = ({ menuList = null }) => {
  const { showMenuList } = useSelector(
    (state: RootState) => ({
      showMenuList: state.permission.showMenuList
    }),
    shallowEqual
  )

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      label,
      key,
      icon,
      children,
      type
    } as MenuItem
  }

  const handleMenuAsAntdFormat = (list: IRoute[]): MenuItem[] => {
    return list.map(item => {
      return !item?.children?.length
        ? getItem(item.meta?.title, item.path, <AppstoreOutlined />)
        : getItem(
            item.meta?.title,
            item.path,
            <AppstoreOutlined />,
            handleMenuAsAntdFormat(item.children!)
          )
    })
  }

  const formatMenuList = useMemo(
    () => handleMenuAsAntdFormat(menuList ?? showMenuList),
    [menuList, showMenuList]
  )

  console.log('formatMenuList', formatMenuList)

  return <Menu theme="dark" mode="inline" items={formatMenuList} />
}

export default Sider

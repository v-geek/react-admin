import React from 'react'
import { useOutlet } from 'react-router-dom'
import Sider from './components/sider'
import './index.less'

const Layout: React.FC = () => {
  const outlet = useOutlet()

  return (
    <React.Fragment>
      <div className="layout-box flex min-h-screen">
        <div className="w-[240px] h-screen sider">
          <Sider />
        </div>
        <div className="flex-1 p-4">{outlet}</div>
      </div>
    </React.Fragment>
  )
}

export default Layout

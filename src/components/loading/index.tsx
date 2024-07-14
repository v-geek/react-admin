import { useEffect } from 'react'
import { Spin } from 'antd'
import NProgress from '@/config/nprogress'

export const Loading = () => {
  return (
    <div className="loading-box">
      <Spin size="large" />
    </div>
  )
}

export const PageLoading = () => {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])

  return <Loading />
}

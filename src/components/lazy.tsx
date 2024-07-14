import { Suspense } from 'react'
import { PageLoading } from './loading'

const LazyComponent = (Comp: React.LazyExoticComponent<React.ComponentType>) => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Comp />
    </Suspense>
  )
}

export default LazyComponent

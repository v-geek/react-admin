import React from 'react'
import * as Icons from '@ant-design/icons'

interface IconProps {
  name: string
  className?: string
}

export const Icon: React.FC<IconProps> = React.memo(({ name, className }) => {
  if (!name) return
  return React.createElement(Icons[name], { className })
})

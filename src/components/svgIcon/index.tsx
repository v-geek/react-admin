import React, { CSSProperties } from 'react'
import './index.less'

interface SvgProps {
  name: string
  color?: string
  iconStyle?: CSSProperties
}

const SvgIcon = (props: SvgProps) => {
  const { name, iconStyle = {} } = props

  const symbolId = `#icon-${name}`

  return (
    <svg aria-hidden="true" className="svg-icon" style={iconStyle}>
      <use href={symbolId} />
    </svg>
  )
}

export default React.memo(SvgIcon)

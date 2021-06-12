import React from 'react'
import * as svg from './svg'

type IconType = keyof typeof svg

type IconProps = {
  name: IconType
  className?: string
  style?: React.CSSProperties
}

export default function Icon({ name, className, style }: IconProps) {
  return React.createElement(svg[name], { className, style })
}

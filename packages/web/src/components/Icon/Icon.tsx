import React from 'react'
import * as svg from './svg'

type IconType = keyof typeof svg

type IconProps = {
  name: IconType
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
}

export default function Icon({ name, className, style, onClick }: IconProps) {
  return React.createElement(svg[name], { className, style, onClick })
}

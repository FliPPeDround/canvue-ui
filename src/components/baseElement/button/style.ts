import type { StyleProps } from '@canvas-ui/core'
import { TinyColor } from '@ctrl/tinycolor'

export const ButtonStyle: StyleProps = {
  cursor: 'pointer',
  textAlign: 'center',
  paddingTop: 8,
  paddingBottom: 8,
  marginBottom: 1,
  marginLeft: 1,
  marginRight: 1,
  marginTop: 1,
  borderRadius: 4,
  borderWidth: 1,
  fontSize: 14,
  lineHeight: 14,
}

export const customColor = {
  custom: {
    color: '#606266',
    borderColor: '#dcdfe6',
    backgroundColor: '#fff',
  },
  hover: {
    color: '#409eff',
    borderColor: '#c6e2ff',
    backgroundColor: '#ecf5ff',
  },
  active: {
    color: '#409eff',
    borderColor: '#409eff',
    backgroundColor: '#ecf5ff',
  },
}

export function computeColor(buttonColor: string) {
  const color = new TinyColor(buttonColor)
  const activeBgColor = color.tint(20).toString()
  const hoverBgColor = color.tint(30).toString()
  const textColor = color.isDark() ? '#fff' : '#303133'
  return {
    custom: {
      color: textColor,
      borderColor: buttonColor,
      backgroundColor: buttonColor,
    },
    hover: {
      color: textColor,
      borderColor: hoverBgColor,
      backgroundColor: hoverBgColor,
    },
    active: {
      color: textColor,
      borderColor: activeBgColor,
      backgroundColor: activeBgColor,
    },
  }
}


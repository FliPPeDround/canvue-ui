import type { StyleProps } from '@canvas-ui/core'
import { TinyColor } from '@ctrl/tinycolor'
import type { ButtonType } from './propsType'
export const ButtonStyle: StyleProps = {
  cursor: 'pointer',
  paddingTop: 8,
  paddingBottom: 8,
  marginBottom: 1,
  marginLeft: 1,
  marginRight: 1,
  marginTop: 1,
  borderRadius: 4,
  textAlign: 'center',
  borderWidth: 1,
  fontSize: 14,
  lineHeight: 14,
}

export function getColorByType(type: ButtonType) {
  const colors = {
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
  switch (type) {
    case 'primary':
      colors.custom.color = '#fff'
      colors.custom.borderColor = '#409eff'
      colors.custom.backgroundColor = '#409eff'
      colors.hover.color = '#fff'
      colors.hover.borderColor = '#79bbff'
      colors.hover.backgroundColor = '#79bbff'
      colors.active.color = '#fff'
      colors.active.borderColor = '#337ecc'
      colors.active.backgroundColor = '#337ecc'
      break
    case 'success':
      colors.custom.color = '#fff'
      colors.custom.borderColor = '#67c23a'
      colors.custom.backgroundColor = '#67c23a'
      colors.hover.color = '#fff'
      colors.hover.borderColor = '#95d475'
      colors.hover.backgroundColor = '#95d475'
      colors.active.color = '#fff'
      colors.active.borderColor = '#529b2e'
      colors.active.backgroundColor = '#529b2e'
      break
    case 'warning':
      colors.custom.color = '#fff'
      colors.custom.borderColor = '#e6a23c'
      colors.custom.backgroundColor = '#e6a23c'
      colors.hover.color = '#fff'
      colors.hover.borderColor = '#eebe77'
      colors.hover.backgroundColor = '#eebe77'
      colors.active.color = '#fff'
      colors.active.borderColor = '#b88230'
      colors.active.backgroundColor = '#b88230'
      break
    case 'info':
      colors.custom.color = '#fff'
      colors.custom.borderColor = '#909399'
      colors.custom.backgroundColor = '#909399'
      colors.hover.color = '#fff'
      colors.hover.borderColor = '#b1b3b8'
      colors.hover.backgroundColor = '#b1b3b8'
      colors.active.color = '#fff'
      colors.active.borderColor = '#73767a'
      colors.active.backgroundColor = '#73767a'
      break
    case 'danger':
      colors.custom.color = '#fff'
      colors.custom.borderColor = '#f56c6c'
      colors.custom.backgroundColor = '#f56c6c'
      colors.hover.color = '#fff'
      colors.hover.borderColor = '#f78989'
      colors.hover.backgroundColor = '#f78989'
      colors.active.color = '#fff'
      colors.active.borderColor = '#c45656'
      colors.active.backgroundColor = '#c45656'
      break
  }
  return colors
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


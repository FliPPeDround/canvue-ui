import type { StyleProps } from '@canvas-ui/core'

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
  color: '#606266',
  borderColor: '#dcdfe6',
  backgroundColor: '#fff',
}

export const hoverButtonStyle: StyleProps = {
  color: '#409eff',
  borderColor: '#c6e2ff',
  backgroundColor: '#ecf5ff',
}

export const activeButtonStyle: StyleProps = {
  borderColor: '#409eff',
}

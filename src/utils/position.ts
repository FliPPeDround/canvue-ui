import type { RenderText } from '@canvas-ui/core'

export function getPositionByNode(node: RenderText) {
  return {
    left: `${node.offset.x}px`,
    top: `${node.offset.y}px`,
    width: `${node.size.width}px`,
    height: `${node.size.height}px`,
  }
}

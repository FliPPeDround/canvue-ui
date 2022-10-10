export function styleTransform(style?: { [key: string]: string | number }) {
  if (!style)
    return {}
  const { backgroundColor, ...rest } = style
  return backgroundColor ? { ...rest, fill: backgroundColor } : rest
}

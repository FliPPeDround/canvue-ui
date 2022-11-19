export const getLenPx = (str: string, font_size: number) => {
  // eslint-disable-next-line no-control-regex
  const strLen = str.replace(/[^\x00-\xFF]/gi, 'aa').length
  return strLen * font_size / 2
}

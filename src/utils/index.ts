export const getColor = (a?: number): string => {
  const r: number = Math.random() * 255
  const g: number = Math.random() * 255
  const b: number = Math.random() * 255

  if (!a) {
    a = Math.random() + 0.3
  }
  if (a < 0) {
    a = 0
  } else if (a > 1) {
    a = 1
  }

  return `rgba(${r},${g},${b},${a})`
}

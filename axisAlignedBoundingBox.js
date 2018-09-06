function axisAlignedBoundingBox(x, y) {
  const xDistance = Math.max(...x) - Math.min(...x)
  const yDistance = Math.max(...y) - Math.min(...y)
  
  return xDistance * yDistance
}
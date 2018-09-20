export default function layout ({
  x = 0,
  y = 0,
  items = [], // { x, y, width, height }
  width = 0,
  height = 0,
  margin = 0,
  anchors = 'top left', // top, left, right, bottom
  direction = 'row' // row, column
}) {
  let dirX = 'center'
  let anchorX = Math.round(width / 2)
  if (anchors.includes('left')) {
    dirX = 'left'
    anchorX = 0
  }
  if (anchors.includes('right')) {
    dirX = 'right'
    anchorX = width
  }
  anchorX += x

  let dirY = 'center'
  let anchorY = Math.round(height / 2)
  if (anchors.includes('top')) {
    dirY = 'top'
    anchorY = 0
  }
  if (anchors.includes('bottom')) {
    dirY = 'bottom'
    anchorY = height
  }
  anchorY += y

  let acc = 0
  let layout = items.map((item) => {
    const newItem = {
      x: (item.x || 0) + anchorX,
      y: (item.y || 0) + anchorY,
      width: item.width,
      height: item.height
    }

    if (direction === 'row') {
      newItem.x += acc

      if (dirY === 'center') {
        newItem.y -= Math.round(item.height / 2)
      }
      else if (dirY === 'bottom') {
        newItem.y -= item.height
      }

      acc += item.width + margin

      return newItem
    }
    else {
      newItem.y += acc

      if (dirX === 'center') {
        newItem.x -= Math.round(item.width / 2)
      }
      else if (dirX === 'right') {
        newItem.x -= item.width
      }

      acc += item.height + margin

      return newItem
    }
  })

  layout = layout.map((item) => {
    if (direction === 'row') {
      if (dirX === 'center') {
        item.x -= Math.round((acc - margin) / 2)
      }
      else if (dirX === 'right') {
        item.x -= acc - margin
      }
    }
    else {
      if (dirY === 'center') {
        item.y -= Math.round((acc - margin) / 2)
      }
      else if (dirY === 'bottom') {
        item.y -= acc - margin
      }
    }

    return item
  })

  return layout
}

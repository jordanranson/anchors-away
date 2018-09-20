# Anchors Away

## Installation
```
npm install anchors-away-js
```

### Usage
```js
import layoutItems from 'anchors-away'

layoutItems({
  x: 0,
  y: 0,
  items: [
    { width: 16, height: 16 }, // { x, y, width, height }
    { width: 32, height: 16 },
    { width: 16, height: 32 },
    { width: 32, height: 32 },
    { width: 16, height: 16 }
  ],
  width: 300,
  height: 300,
  margin: 10,
  anchors: 'top left', // top, left, bottom, right
  direction: 'row' // row, column
})

// Result
/*
[
  {
    "x": 74,
    "y": 142,
    "width": 16,
    "height": 16
  },
  {
    "x": 100,
    "y": 142,
    "width": 32,
    "height": 16
  },
  {
    "x": 142,
    "y": 134,
    "width": 16,
    "height": 32
  },
  {
    "x": 168,
    "y": 134,
    "width": 32,
    "height": 32
  },
  {
    "x": 210,
    "y": 142,
    "width": 16,
    "height": 16
  }
]
*/
```

<template>
  <div id="app">
    <div>
      <canvas ref="canvas" width="300" height="300"></canvas>
      <p>
        Anchor X:
        <button @click="config.anchorX = 'left'">Left</button>
        <button @click="config.anchorX = ''">Center</button>
        <button @click="config.anchorX = 'right'">Right</button>
      </p>
      <p>
        Anchor Y:
        <button @click="config.anchorY = 'top'">Top</button>
        <button @click="config.anchorY = ''">Center</button>
        <button @click="config.anchorY = 'bottom'">Bottom</button>
      </p>
      <p>
        Direction:
        <button @click="config.direction = 'row'">Row</button>
        <button @click="config.direction = 'column'">Column</button>
      </p>
    </div>
    <pre>{{ layout }}</pre>
  </div>
</template>

<script>
import layoutItems from '@/anchors-away.js'

export default {
  name: 'app',

  data () {
    return {
      items: [
        { width: 16, height: 16 },
        { width: 32, height: 16 },
        { width: 16, height: 32 },
        { width: 32, height: 32 },
        { width: 16, height: 16 }
      ],
      config: {
        anchorX: 'left',
        anchorY: 'top',
        direction: 'row'
      },
      canvas: undefined,
      context: undefined
    }
  },

  computed: {
    layout () {
      const { config } = this

      return layoutItems({
        x: 0,
        y: 0,
        items: this.items,
        width: 300,
        height: 300,
        margin: 10,
        anchors: [ config.anchorX, config.anchorY ].join(' '),
        direction: config.direction
      })
    }
  },

  mounted () {
    this.$set(this, 'canvas', this.$refs.canvas)
    this.$set(this, 'context', this.$refs.canvas.getContext('2d'))

    this.draw(this.layout)
  },

  methods: {
    draw (layout) {
      const { canvas, context } = this
      const { width, height } = canvas

      context.clearRect(0, 0, width, height)
      context.fillStyle = 'red'

      layout.forEach((item) => {
        context.fillRect(item.x, item.y, item.width, item.height)
      })
    }
  },

  watch: {
    layout (layout) {
      this.draw(layout)
    },

  }
}
</script>

<style>
#app {
  display: flex;
}

canvas {
  background: #f0f0f0;
}

pre {
  margin: 0;
  padding: 1rem;
}
</style>

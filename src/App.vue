<template>
  <div id="app" class="flex">
    <div>
      <canvas ref="canvas" width="300" height="300"></canvas>
      <p>
        Anchor X:
        <button @click="settings.anchorX = 'left'">Left</button>
        <button @click="settings.anchorX = ''">Center</button>
        <button @click="settings.anchorX = 'right'">Right</button>
      </p>
      <p>
        Anchor Y:
        <button @click="settings.anchorY = 'top'">Top</button>
        <button @click="settings.anchorY = ''">Center</button>
        <button @click="settings.anchorY = 'bottom'">Bottom</button>
      </p>
      <p>
        Direction:
        <button @click="settings.direction = 'row'">Row</button>
        <button @click="settings.direction = 'column'">Column</button>
      </p>
    </div>
    <div class="flex">
      <pre>// Input
{{ config }}</pre>
      <pre>// Result
{{ layout }}</pre>
    </div>
  </div>
</template>

<script>
import layoutItems from '@/lib/anchors-away.js'

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
      settings: {
        anchorX: 'left',
        anchorY: 'top',
        direction: 'row'
      },
      canvas: undefined,
      context: undefined
    }
  },

  computed: {
    config () {
      const { settings } = this

      return {
        x: 0,
        y: 0,
        items: this.items,
        width: 300,
        height: 300,
        margin: 10,
        anchors: [ settings.anchorX, settings.anchorY ].join(' ').trim(),
        direction: settings.direction
      }
    },

    layout () {
      const { config } = this

      return layoutItems(config)
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
    }
  }
}
</script>

<style>
.flex {
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

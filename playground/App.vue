<script setup lang="ts">
import { canvasRect, canvasUi } from 'canvas-ui/index'
import { ref } from 'vue'
const style = ref({
  cursor: 'pointer',
  top: 10,
  left: 10,
  width: 100,
  height: 50,
  fill: '#FF85B3',
  stroke: '#F900BF',
  strokeWidth: 1,
})

const hoverStyle = {
  boxShadow: '12px 12px 4px rgba(0, 0, 255, .2)',
  fill: '#9900F0',
  stroke: '#9900F0',
}

const handleOver = () => {
  style.value = { ...style.value, ...hoverStyle }
}
</script>

<template>
  <canvas-ui>
    <canvas-rect :style="style" @over="handleOver" />
  </canvas-ui>
</template>

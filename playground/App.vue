<script setup lang="ts">
import { canvasCircle, canvasRect, canvasUi } from 'canvas-ui/index'
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

const style1 = ref({
  cursor: 'pointer',
  top: 20,
  left: 10,
  width: 100,
  height: 50,
  fill: '#FF85B3',
  stroke: '#F900BF',
  strokeWidth: 1,
})

const flexStyle = {
  width: 300,
  hight: 150,
  flexDirection: 'column',
  justifyContent: 'center',
}
</script>

<template>
  <canvas-ui :style="flexStyle">
    <canvas-rect :style="style" />
    <canvas-circle :style="style1" />
  </canvas-ui>
</template>

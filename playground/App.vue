<script setup lang="ts">
import { canvasRect, canvasText, canvasUi } from 'canvas-ui/index'
import { ref } from 'vue'
const style = ref({
  cursor: 'pointer',
  width: 100,
  height: 50,
  backgroundColor: '#FF85B3',
  stroke: '#F900BF',
  strokeWidth: 1,
})

const flexStyle = {
  width: 300,
  hight: 150,
  display: 'flex',
  flexDirection: 'column',
}

const text = ref(1)
setInterval(() => {
  text.value++
}, 16.67)
</script>

<template>
  <canvas-ui :style="flexStyle">
    <canvas-rect
      v-for="(item, index) in 1"
      :key="index"
      :style="{ ...style, top: item * 10 }"
    />
    <canvas-text>
      {{ text }}
    </canvas-text>
  </canvas-ui>
</template>

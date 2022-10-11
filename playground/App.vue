<script setup lang="ts">
import { canvasButton, canvasRect, canvasText, canvasUi } from 'canvas-ui/index'

const flexStyle = {
  width: 300,
  hight: 150,
  display: 'flex',
  flexDirection: 'column',
}

const handleClick = () => {
  console.log('click')
}
</script>

<template>
  <canvas-ui :style="flexStyle">
    <canvasButton @click="handleClick">
      按钮
    </canvasButton>
    <canvasButton>
      Button
    </canvasButton>
  </canvas-ui>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

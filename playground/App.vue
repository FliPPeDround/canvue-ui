<script setup lang="ts">
import { canvasButton, canvasInput, canvasRect, canvasText, canvasUi } from 'canvas-ui/index'

const flexStyle = {
  width: 500,
  hight: 500,
  display: 'flex',
  flexDirection: 'column',
}

const handleClick = () => {
  // console.log('click')
}
</script>

<template>
  <canvas-ui :style="flexStyle">
    <canvasButton @click="handleClick">
      Default
    </canvasButton>
    <canvasButton type="primary">
      primary
    </canvasButton>
    <canvasButton type="success">
      success
    </canvasButton>
    <canvasButton type="warning">
      warning
    </canvasButton>
    <canvasButton type="danger">
      danger
    </canvasButton>
    <canvasButton type="info">
      info
    </canvasButton>
    <canvasButton color="#626aef">
      #626aef color
    </canvasButton>
    <canvasInput placeholder="qwe" />
  </canvas-ui>
  <input type="text" placeholder="asd">
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

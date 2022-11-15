<script setup lang="ts">
import { cvButton, cvInput, cvUi } from 'canvue-ui'

const flexStyle = {
  width: 500,
  hight: 500,
  display: 'flex',
  flexDirection: 'column',
}

const handleClick = () => {
  alert('clicked')
}
</script>

<template>
  <cv-ui :styles="flexStyle">
    <cv-button @click="handleClick">
      Click me
    </cv-button>
    <cv-input placeholder="aaasdasdasd" />
    <cv-input placeholder="你在干什么" />
  </cv-ui>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
